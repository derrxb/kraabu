import { EKyashMapper } from '~/domain/payments/mappers/ekyash-mapper';
import GiggedMapper from '~/domain/payments/mappers/gigged-mapper';
import type { EKyashEntity } from '~/entities/ekyash';
import type { PaymentEntity } from '~/entities/payment';
import Failure from '~/lib/failure';
import PaymentRepository from '~/repositories/payment-repository';
import getGiggedBzPaymentSchema from '~/requests/get-gigged-bz-payment';

export default class GetPayment {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async verifyParams() {
    const params = new URL(this.request.url).searchParams;

    const { invoiceNo, paymentKey } = await getGiggedBzPaymentSchema.validateAsync({
      invoiceNo: params.get('invoiceNo'),
      paymentKey: params.get('paykey'),
    });

    return {
      invoiceNo,
      paymentKey,
    };
  }

  async getPendingPayment(invoice: string) {
    const payment = await PaymentRepository.getPaymentByInvoice(invoice);

    if (!payment) {
      throw new Failure('not_found', 'No payment with the provided `invoiceNo` exists.');
    }

    return payment;
  }

  async getPaymentOrderDetails(payment: PaymentEntity) {
    if (payment.hasOrderDetails()) {
      return undefined;
    }

    return await new GiggedMapper(
      payment.additionalData.gateway as string,
      payment.additionalData.hashkey as string,
    ).getPaymentOrderDetails({ invoiceNo: payment.invoice, paykey: payment.additionalData?.paymentKey as string });
  }

  async getPaymentQrCode(payment: PaymentEntity) {
    if (payment.hasQrCode()) {
      return undefined;
    }

    const ekyashMapper = new EKyashMapper(payment?.supplier?.ekyash as EKyashEntity);
    await ekyashMapper.initialize();
    return await ekyashMapper.createInvoice(payment);
  }

  async call() {
    let payment: PaymentEntity | null = null;
    const params = await this.verifyParams();
    payment = await this.getPendingPayment(params.invoiceNo);

    if (!payment.isValidPaymentKey(params.paymentKey)) {
      throw new Failure('forbidden', "The payment key provided does not match this payment's records");
    }

    if (payment.canBePaid()) {
      return payment;
    }

    const invoice = await this.getPaymentQrCode(payment);
    const orderDetails = await this.getPaymentOrderDetails(payment);

    if (!!invoice || !!orderDetails) {
      return await PaymentRepository.setOrderDetailsAndPaymentCode(payment, invoice, orderDetails);
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
