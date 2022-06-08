import { EKyashStatus, OrderStatus } from '@prisma/client';
import type { EKyashEntity } from '~/domain/orders/entities/ekyash';
import type { OrderEntity } from '~/domain/orders/entities/order';
import type { CompletedPaymentCallbackData } from '~/domain/orders/library/ekyash-api';
import { TransactionStatus } from '~/domain/orders/library/ekyash-api';
import GiggedMapper from '~/domain/orders/mappers/gigged-mapper.server';
import PaymentRepository from '~/domain/orders/repositories/payment-repository';
import Failure from '~/lib/failure';
import completePendingEkyashPaymentSchema from '~/requests/complete-pending-ekyash-payment';

/**
 * This uses the data obtained from EKyash to mark a payment as completed
 * using the callback options provided by EKyash. This is an integration specific to Gigged and E-Kyash.
 */
export default class CompletePayment {
  private request: Request;
  private payment: OrderEntity | null;
  private paymentStatus: CompletedPaymentCallbackData | null;

  constructor(request: Request) {
    this.request = request;
    this.payment = null;
    this.paymentStatus = null;
  }

  async verifyPaymentParams() {
    const body = await this.request.json();
    const validatedParams = await completePendingEkyashPaymentSchema.validateAsync({
      ...body,
    });

    this.paymentStatus = {
      ...validatedParams,
    };
  }

  async validateHashKey() {
    if (this.paymentStatus) {
      return await new GiggedMapper(
        this.payment?.additionalData.gateway as string,
        this.payment?.additionalData.hashkey as string,
      ).validatePaymentCallback(this.paymentStatus, this.payment?.supplier?.ekyash as EKyashEntity);
    }

    return false;
  }

  async setPayment() {
    if (this.paymentStatus?.orderId) {
      this.payment = (await PaymentRepository.getPaymentByInvoice(this.paymentStatus?.orderId)) ?? null;
    } else {
      throw new Failure('not_found', 'No payment request with the given invoice found.');
    }
  }

  async setKrabuuPaymentAsAcceptedOrRejected() {
    let updatedOrder: OrderEntity | undefined = this.payment ?? undefined;

    switch (this.paymentStatus?.statusPay) {
      case TransactionStatus.New:
        return;
      case TransactionStatus.Pending:
        return;
      case TransactionStatus.Accepted:
        updatedOrder = await PaymentRepository.setEkyashPaymentAsCompleted(this.payment as OrderEntity, {
          status: EKyashStatus.Success,
          transactionId: this.paymentStatus?.transactionId,
        });
        break;
      case TransactionStatus.Declined:
        updatedOrder = await PaymentRepository.setEkyashPaymentAsRejected(this.payment as OrderEntity, {
          status: EKyashStatus.Canceled,
          transactionId: this.paymentStatus?.transactionId,
        });
        break;
      default:
        throw new Failure('bad_request', 'Could not complete this request as an unknown `statusPay` was provided.');
    }

    // Update current payment to match the updated one.
    if (updatedOrder && this.payment) {
      this.payment.status = updatedOrder.status;
    }
  }

  async setGiggedPaymentAsAcceptedOrRejected() {
    if (typeof this.payment?.status === 'undefined') {
      throw new Failure('cannot_process', 'The payment is missing the status field.');
    }

    if (this.payment?.status === OrderStatus.Pending) {
      throw new Failure(
        'cannot_process',
        'Expected `payment` to be either `completed` or `failed` but got `pending`. Did you forget to call `setKrabuuPaymentAsAcceptedOrRejected`?',
      );
    }

    await new GiggedMapper(
      this.payment?.additionalData.gateway as string,
      this.payment?.additionalData.hashkey as string,
    ).updateOrderStatus(this.payment);
  }

  async call() {
    await this.verifyPaymentParams();
    await this.setPayment();

    if (await this.validateHashKey()) {
      throw new Failure('forbidden', 'The payment hash is invalid.');
    }

    // Leave early if payment has been changed from `pending`.
    if (!this.payment?.isPending()) {
      return this.payment;
    }

    await this.setKrabuuPaymentAsAcceptedOrRejected();
    await this.setGiggedPaymentAsAcceptedOrRejected();

    return this.payment;
  }
}
