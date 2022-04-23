import { ekyash } from "~/config/index.server";
import { EKyashMapper } from "~/domain/payments/mappers/ekyash-mapper";
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
    const result = await getGiggedBzPaymentSchema.validateAsync({
      invoiceNo: this.params.get("invoiceNo"),
      paymentKey: this.params.get("paykey"),
    });

    this.invoiceNo = result.invoiceNo;
    this.paymentKey = result.paymentKey;
  }

  async call() {
    await this.verifyParams();

    const payment = await PaymentRepository.getPaymentByInvoice(
      this.invoiceNo as string // This won't run without invoiceNo being present.
    );

    if (!payment) {
      throw new Failure(
        "not_found",
        "No payment with the provided `invoiceNo` exists."
      );
    }

    if (payment.canBePaid()) {
      return payment;
    }

    const ekyashMapper = new EKyashMapper(
      ekyash.credentials.SID,
      ekyash.credentials["Pin Hash"]
    );

    const paymentResponse = await ekyashMapper.createInvoice(payment);
    const inProgressPayment = await PaymentRepository.setPaymentQrCodeUrl(
      payment,
      paymentResponse.qrUrl
    );

    if (!inProgressPayment) {
      throw new Failure(
        "cannot_process",
        "Something unexpected happened with this payment."
      );
    }

    return inProgressPayment;
  }
}
