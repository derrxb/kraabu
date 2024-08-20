import type { EKyashEntity } from '~/domain/orders/entities/ekyash';
import type { OrderEntity } from '~/domain/orders/entities/order';
import type { UserEntity } from '~/domain/orders/entities/user';
import { EKyashMapper } from '~/domain/orders/mappers/ekyash-mapper';
import GiggedMapper from '~/domain/orders/mappers/gigged-mapper.server';
import OrderRepository from '~/domain/orders/repositories/order-repository';
import { UserRepository } from '~/domain/orders/repositories/user-repository';
import Failure from '~/lib/failure';
import getGiggedBzPaymentSchema from '~/presentation/requests/get-gigged-bz-payment';
import { PaymentMethod } from '.';

export default class GetOrder {
  private request: Request;
  private user?: UserEntity;

  constructor(request: Request) {
    this.request = request;
  }

  async verifyParams() {
    const params = new URL(this.request.url).searchParams;

    const { invoiceNo, paymentKey } = await getGiggedBzPaymentSchema.validateAsync({
      invoiceNo: params.get('invoiceno'),
      paymentKey: params.get('paykey'),
    });

    return {
      invoiceNo,
      paymentKey,
    };
  }

  async getPendingOrder(invoice: string) {
    const order = await OrderRepository.getByInvoice(invoice);

    if (!order) {
      throw new Failure('not_found', 'No order with the provided `invoiceNo` exists.');
    }

    return order;
  }

  async getOrderUser(order: OrderEntity) {
    this.user = await UserRepository.findByUserId(Number(order.userId));
  }

  async getPaymentOrderDetails(order: OrderEntity) {
    if (order.hasOrderDetails()) {
      return undefined;
    }

    return await new GiggedMapper(
      order.additionalData.gateway as string,
      order.additionalData.hashkey as string,
    ).getOrderPaymentDetails({ invoiceNo: order.invoice, paykey: order.additionalData?.paymentKey as string });
  }

  async getPaymentQrCode(payment: OrderEntity) {
    if (payment.hasQrCode()) {
      return undefined;
    }

    const ekyashMapper = new EKyashMapper(this.user?.ekyash as EKyashEntity);

    await ekyashMapper.initialize();

    return await ekyashMapper.createInvoice(payment);
  }

  async call() {
    let order: OrderEntity | null = null;
    const params = await this.verifyParams();
    order = await this.getPendingOrder(params.invoiceNo);

    if (!order.isValidPaymentKey(params.paymentKey)) {
      throw new Failure('forbidden', "The payment key provided does not match this payment's records");
    }

    if (order.canBePaid()) {
      return order;
    }

    await this.getOrderUser(order);

    const invoice = await this.getPaymentQrCode(order);

    const orderDetails = await this.getPaymentOrderDetails(order);

    return await OrderRepository.setOrderDetailsAndPaymentCode(order, PaymentMethod.EKyash, invoice, orderDetails);
  }
}
