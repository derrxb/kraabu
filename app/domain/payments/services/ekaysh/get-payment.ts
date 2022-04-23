import { Params } from "react-router";
import Payment from "~/domain/payments/entities/payment";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import Failure from "~/lib/failure";

export default class GetPayment {
  private params: Params;

  constructor(params: Params) {
    this.params = params;
  }

  async call(): Promise<Payment> {
    const { id } = this.params;

    if (!id) {
      throw new Failure("cannot_process", "A payment `invoice` is required.");
    }

    const payment = await PaymentRepository.getPaymentByInvoice(id);

    if (payment) {
      return payment;
    }

    throw new Failure(
      "not_found",
      "A payment with the given `invoice` does not exist."
    );
  }
}
