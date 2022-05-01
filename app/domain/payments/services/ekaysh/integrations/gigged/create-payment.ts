import Payment from "~/domain/payments/entities/payment";
import type { GiggedOrderHandshake } from "~/domain/payments/library/gigged-api";
import GiggedMapper from "~/domain/payments/mappers/gigged-mapper";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import { SupplierRepository } from "~/domain/payments/repositories/supplier-repository";
import Failure from "~/lib/failure";
import createdPendingGiggedPaymentSchema from "~/requests/create-pending-gigged-payment";

export default class CreatePayment {
  private request: Request;
  private payment: GiggedOrderHandshake | null;

  constructor(request: Request) {
    this.request = request;
    this.payment = null;
  }

  async verifyPaymentParams() {
    const body = await this.request.json();

    this.payment = await createdPendingGiggedPaymentSchema.validateAsync({
      ...body,
      total: Number(body.total).toString(), // ensure string
    });
  }

  async call(): Promise<Payment> {
    await this.verifyPaymentParams();

    if (!this.payment) {
      throw new Error("No data from GiggedBz received.");
    }

    const supplier = await SupplierRepository.findSupplierByUsername(
      "giggedbz"
    );

    if (!supplier) {
      throw new Failure(
        "forbidden",
        `There is no supplier with the username: giggedbz`
      );
    }

    const pendingPayment = new GiggedMapper(
      this.payment.gateway,
      this.payment.hashkey
    ).getInitialPayment(this.payment, supplier);
    const payment = await PaymentRepository.createPending(pendingPayment);

    return payment as Payment;
  }
}
