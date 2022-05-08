import type { EKyashEntity } from "~/domain/payments/entities/ekyash";
import { PaymentEntity } from "~/domain/payments/entities/payment";
import { EKyashMapper } from "~/domain/payments/mappers/ekyash-mapper";
import GiggedMapper from "~/domain/payments/mappers/gigged-mapper";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import Failure from "~/lib/failure";
import getGiggedBzPaymentSchema from "~/requests/get-gigged-bz-payment";

export default class GetPayment {
  private params: URLSearchParams;

  constructor(params: URLSearchParams) {
    this.params = params;
  }

  async verifyParams(): Promise<{ invoiceNo: string; paymentKey: string }> {
    const { invoiceNo, paykey } = await getGiggedBzPaymentSchema.validateAsync({
      invoiceNo: this.params.get("invoiceNo"),
      paykey: this.params.get("paykey"),
    });

    return {
      invoiceNo,
      paymentKey: paykey,
    };
  }

  async getPendingPayment(invoice: string) {
    const payment = await PaymentRepository.getPaymentByInvoice(invoice);

    if (!payment) {
      throw new Failure(
        "not_found",
        "No payment with the provided `invoiceNo` exists."
      );
    }

    return payment;
  }

  async getPaymentWithOrderDetails(payment: PaymentEntity) {
    const nextPayment = await new GiggedMapper(
      payment.additionalData.gateway as string,
      payment.additionalData.hashkey as string
    ).findOrderWithOrderDetails(payment);

    return await PaymentRepository.setPaymentAdditionalData(nextPayment);
  }

  async getPaymentWithPayQrCode(payment: PaymentEntity) {
    const ekyashMapper = new EKyashMapper(
      payment?.supplier?.ekyash as EKyashEntity
    );

    await ekyashMapper.initialize();

    const invoice = await ekyashMapper.createInvoice(payment);

    const nextPayment = new PaymentEntity({
      ...payment,
      additionalData: {
        ...payment.additionalData,
        qrCodeUrl: invoice.qrUrl,
      },
    });

    await PaymentRepository.setPaymentQrCodeUrl(
      nextPayment,
      nextPayment.additionalData.qrCodeUrl as string
    );

    return nextPayment;
  }

  async call() {
    let payment: PaymentEntity | null = null;
    const { invoiceNo: invoice } = await this.verifyParams();
    payment = await this.getPendingPayment(invoice);

    if (payment.canBePaid()) return payment;
    if (!payment.hasOrderDetails()) {
      payment = await this.getPaymentWithOrderDetails(payment);
    }
    if (!payment.hasQrCode()) {
      payment = await this.getPaymentWithPayQrCode(payment);
    }

    return payment;
  }
}
