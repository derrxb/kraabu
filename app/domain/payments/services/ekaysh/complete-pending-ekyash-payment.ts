import Payment from "~/domain/payments/entities/payment";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import Failure from "~/lib/failure";
import completePendingEkyashPaymentSchema from "~/requests/complete-pending-ekyash-payment";
import {
  CompletedPaymentCallbackData,
  TransactionStatus,
} from "../../library/ekyash-api";

/**
 * This uses the data obtained from EKyash to mark a payment as completed
 * using the callback options provided by EKyash.
 */
export default class CompletePendingEkyashPayment {
  private request: Request;
  private payment: Payment | null;
  private invoice: string | null = null;
  private paymentStatus: CompletedPaymentCallbackData | null;

  constructor(request: Request) {
    this.request = request;
    this.payment = null;
    this.paymentStatus = null;
  }

  async verifyPaymentParams() {
    const body = await this.request.json();
    const validatedParams =
      await completePendingEkyashPaymentSchema.validateAsync({
        ...body,
      });

    this.paymentStatus = {
      ...validatedParams,
    };
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

  async setPaymentAsAcceptedOrRejected() {
    switch (this.paymentStatus?.statusPay) {
      case TransactionStatus.Pending:
        return;
      case TransactionStatus.Accepted:
        await PaymentRepository.setPaymentAsCompleted(this.payment as Payment);
        break;
      case TransactionStatus.Declined:
        await PaymentRepository.setPaymentAsRejected(this.payment as Payment);
        break;
      default:
        throw new Failure(
          "bad_request",
          "Could not complete this request as an unknown `statusPay` was provided."
        );
    }
  }

  async call() {
    await this.verifyPaymentParams();
    await this.setPayment();
    await this.setPaymentAsAcceptedOrRejected();

    return this.payment;
  }
}
