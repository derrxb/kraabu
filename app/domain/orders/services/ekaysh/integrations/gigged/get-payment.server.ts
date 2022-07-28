import type { EKyashEntity } from '~/domain/orders/entities/ekyash';
import type { OrderEntity } from '~/domain/orders/entities/order';
import type { UserEntity } from '~/domain/orders/entities/user';
import { EKyashMapper } from '~/domain/orders/mappers/ekyash-mapper';
import GiggedMapper from '~/domain/orders/mappers/gigged-mapper.server';
import OrderRepository from '~/domain/orders/repositories/order-repository';
import { UserRepository } from '~/domain/orders/repositories/user-repository';
import Failure from '~/lib/failure';
import getGiggedBzPaymentSchema from '~/presentation/requests/get-gigged-bz-payment';

export default class GetPayment {
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

  async getPendingPayment(invoice: string) {
    const payment = await OrderRepository.getPaymentByInvoice(invoice);

    if (!payment) {
      throw new Failure('not_found', 'No order with the provided `invoiceNo` exists.');
    }

    return payment;
  }

  async getPaymentUser(payment: OrderEntity) {
    this.user = await UserRepository.findByUserId(Number(payment.userId));
  }

  async getPaymentOrderDetails(payment: OrderEntity) {
    if (payment.hasOrderDetails()) {
      return undefined;
    }

    return await new GiggedMapper(
      payment.additionalData.gateway as string,
      payment.additionalData.hashkey as string,
    ).getPaymentOrderDetails({ invoiceNo: payment.invoice, paykey: payment.additionalData?.paymentKey as string });
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
    let payment: OrderEntity | null = null;
    const params = await this.verifyParams();
    payment = await this.getPendingPayment(params.invoiceNo);

    if (!payment.isValidPaymentKey(params.paymentKey)) {
      throw new Failure('forbidden', "The payment key provided does not match this payment's records");
    }

    if (payment.canBePaid()) {
      return payment;
    }

    await this.getPaymentUser(payment);

    const invoice = await this.getPaymentQrCode(payment);
    const orderDetails = await this.getPaymentOrderDetails(payment);

    if (!!invoice || !!orderDetails) {
      return await OrderRepository.setOrderDetailsAndPaymentCode(payment, invoice, orderDetails);
    }

    throw new Failure(
      'bad_request',
      `
        Unexpected state reached: The payment has valid order details and a valid payment QR code URL.
        This is more than likely a development error.
      `,
    );
  }
}
