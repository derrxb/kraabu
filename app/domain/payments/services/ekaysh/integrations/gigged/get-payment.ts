import { EKyash } from "~/domain/payments/entities/ekyash";
import Payment from "~/domain/payments/entities/payment";
import { EKyashMapper } from "~/domain/payments/mappers/ekyash-mapper";
import GiggedMapper from "~/domain/payments/mappers/gigged-mapper";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import Failure from "~/lib/failure";
import getGiggedBzPaymentSchema from "~/requests/get-gigged-bz-payment";

export default class GetPayment {
  private params: URLSearchParams;
  private invoiceNo?: string;
  private paymentKey?: string;

  constructor(params: URLSearchParams) {
    this.params = params;
  }

  async verifyParams() {
    const { invoiceNo, paykey } = await getGiggedBzPaymentSchema.validateAsync({
      invoiceNo: this.params.get("invoiceNo"),
      paykey: this.params.get("paykey"),
    });

    this.invoiceNo = invoiceNo;
    this.paymentKey = paykey;
  }

  async getPendingPayment() {
    const payment = await PaymentRepository.getPaymentByInvoice(
      this.invoiceNo as string
    );

    if (!payment) {
      throw new Failure(
        "not_found",
        "No payment with the provided `invoiceNo` exists."
      );
    }

    return payment;
  }

  async getPaymentWithOrderDetails(payment: Payment) {
    const paymentWithOrderDetails = await new GiggedMapper(
      payment.additionalData.gateway as string,
      payment.additionalData.hashkey as string
    ).findOrderWithPaymentKey(
      {
        invoiceno: this.invoiceNo as string,
        paymentKey: this.paymentKey as string,
      },
      payment.supplier
    );

    const nextPayment = new Payment({
      ...payment,
      additionalData: {
        ...payment.additionalData,
        ...paymentWithOrderDetails.additionalData,
      },
    });

    await PaymentRepository.setPaymentAdditionalData(nextPayment);

    return nextPayment;
  }

  async getPaymentWithPayQrCode(payment: Payment) {
    const ekyashMapper = new EKyashMapper(payment.supplier.ekyash as EKyash);

    const invoice = await ekyashMapper.createInvoice(payment);

    const nextPayment = new Payment({
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
    let payment;

    await this.verifyParams();
    payment = await this.getPendingPayment();

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
