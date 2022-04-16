import { Params } from "react-router";
import Failure from "~/lib/failure";
import Payment from "../entities/payment";
import PaymentRepository from "../repositories/payment-repository";

export default class GetEKyashPayment {
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
