import { Params } from "react-router";
import Failure from "~/lib/failure";
import completePendingEkyashPaymentSchema from "~/requests/complete-pending-ekyash-payment";
import Payment from "../entities/payment";
import PaymentRepository from "../repositories/payment-repository";

export default class CompletePendingEkyashPayment {
  private params: Params;
  private payment: Payment | null;
  private invoice: string | null = null;

  constructor(params: Params) {
    this.params = params;
    this.payment = null;
  }

  async verifyPaymentParams() {
    const { id } = this.params;
    const { invoiceNo } =
      await completePendingEkyashPaymentSchema.validateAsync({
        invoiceNo: id,
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
