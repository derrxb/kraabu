import { ekyash } from "~/config/index.server";
import {
  createNewInvoice,
  getAuthorization,
} from "~/domain/payments/library/ekyash-api";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import Failure from "~/lib/failure";
import getGiggedBzPaymentSchema from "~/requests/get-gigged-bz-payment";

export default class GetGiggedBzPayment {
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

    const session = await getAuthorization({
      sid: ekyash.credentials.SID,
      pinHash: ekyash.credentials["Pin Hash"],
      pushKey: "{{pushkey}}",
    });

    const paymentResponse = await createNewInvoice({
      amount: payment.currency.amount,
      description: payment.description,
      currency: "BZD",
      orderId: payment.invoice,
      session: session.session,
    });

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
