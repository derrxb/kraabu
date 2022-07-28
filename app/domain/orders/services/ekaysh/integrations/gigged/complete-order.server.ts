import { EKyashStatus, OrderStatus } from '@prisma/client';
import type { EKyashEntity } from '~/domain/orders/entities/ekyash';
import type { OrderEntity } from '~/domain/orders/entities/order';
import type { CompletedPaymentCallbackData } from '~/domain/orders/library/ekyash-api';
import { TransactionStatus } from '~/domain/orders/library/ekyash-api';
import GiggedMapper from '~/domain/orders/mappers/gigged-mapper.server';
import OrderRepository from '~/domain/orders/repositories/order-repository';
import Failure from '~/lib/failure';
import completePendingEkyashPaymentSchema from '~/presentation/requests/complete-pending-ekyash-payment';

/**
 * This uses the data obtained from EKyash to mark an order as completed
 * using the callback options provided by EKyash. This is an integration specific to Gigged and E-Kyash.
 */
export default class CompleteOrder {
  private request: Request;
  private order: OrderEntity | null;
  private orderStatus: CompletedPaymentCallbackData | null;

  constructor(request: Request) {
    this.request = request;
    this.order = null;
    this.orderStatus = null;
  }

  async verifyOrderParams() {
    const body = await this.request.json();
    const validatedParams = await completePendingEkyashPaymentSchema.validateAsync({
      ...body,
    });

    this.orderStatus = {
      ...validatedParams,
    };
  }

  async validateHashKey() {
    if (this.orderStatus) {
      return await new GiggedMapper(
        this.order?.additionalData.gateway as string,
        this.order?.additionalData.hashkey as string,
      ).validatePaymentCallback(this.orderStatus, this.order?.user?.ekyash as EKyashEntity);
    }

    return false;
  }

  async setOrder() {
    if (this.orderStatus?.orderId) {
      this.order = (await OrderRepository.getByInvoice(this.orderStatus?.orderId)) ?? null;
    } else {
      throw new Failure('not_found', 'No order request with the given invoice found.');
    }
  }

  async setKrabuuPaymentAsAcceptedOrRejected() {
    let updatedOrder: OrderEntity | undefined = this.order ?? undefined;

    switch (this.orderStatus?.statusPay) {
      case TransactionStatus.New:
        return;
      case TransactionStatus.Pending:
        return;
      case TransactionStatus.Accepted:
        updatedOrder = await OrderRepository.setEkyashPaymentAsCompleted(this.order as OrderEntity, {
          status: EKyashStatus.Success,
          transactionId: this.orderStatus?.transactionId,
        });
        break;
      case TransactionStatus.Declined:
        updatedOrder = await OrderRepository.setEkyashOrderAsRejected(this.order as OrderEntity, {
          status: EKyashStatus.Canceled,
          transactionId: this.orderStatus?.transactionId,
        });
        break;
      default:
        throw new Failure('bad_request', 'Could not complete this request as an unknown `statusPay` was provided.');
    }

    // Update current order to match the updated one.
    if (updatedOrder && this.order) {
      this.order.status = updatedOrder.status;
    }
  }

  async setGiggedPaymentAsAcceptedOrRejected() {
    if (typeof this.order?.status === 'undefined') {
      throw new Failure('cannot_process', 'The order is missing the status field.');
    }

    if (this.order?.status === OrderStatus.Pending) {
      throw new Failure(
        'cannot_process',
        'Expected `order` to be either `completed` or `failed` but got `pending`. Did you forget to call `setKrabuuPaymentAsAcceptedOrRejected`?',
      );
    }

    await new GiggedMapper(
      this.order?.additionalData.gateway as string,
      this.order?.additionalData.hashkey as string,
    ).updateOrderStatus(this.order);
  }

  async call() {
    await this.verifyOrderParams();
    await this.setOrder();

    if (await this.validateHashKey()) {
      throw new Failure('forbidden', 'The order hash is invalid.');
    }

    // Leave early if order has been changed from `pending`.
    if (!this.order?.isPending()) {
      return this.order;
    }

    await this.setKrabuuPaymentAsAcceptedOrRejected();
    await this.setGiggedPaymentAsAcceptedOrRejected();

    return this.order;
  }
}
