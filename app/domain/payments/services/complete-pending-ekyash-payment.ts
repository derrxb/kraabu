import Failure from "~/lib/failure";
import completePendingEkyashPaymentSchema from "~/requests/complete-pending-ekyash-payment";
import Payment from "../entities/payment";
import PaymentRepository from "../repositories/payment-repository";

export default class CompletePendingEkyashPayment {
  private request: Request;
  private payment: Payment | null;
  private invoice: string | null = null;

  constructor(request: Request) {
    this.request = request;
    this.payment = null;
  }

  async verifyPaymentParams() {
    const body = await this.request.json();
    const { invoiceNo } =
      await completePendingEkyashPaymentSchema.validateAsync({
        invoiceNo: body?.invoiceNo,
      });

    this.invoice = invoiceNo;
  }

  async setPayment() {
    if (this.invoice) {
      this.payment = await PaymentRepository.getPaymentByInvoice(this.invoice);
    } else {
      throw new Failure(
        "not_found",
        "No payment request with the given invoice found."
      );
    }
  }

  async call() {
    await this.verifyPaymentParams();
    await this.setPayment();

    return this.payment;
  }
}
