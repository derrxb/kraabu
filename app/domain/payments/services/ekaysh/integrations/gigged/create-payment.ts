import Payment from "~/domain/payments/entities/payment";
import type { ArcadierPaymentRequest } from "~/domain/payments/library/arcadier-api";
import ArcadierPaymentMapper from "~/domain/payments/mappers/arcadier-payment-mapper";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import createdPendingGiggedPaymentSchema from "~/requests/create-pending-gigged-payment";

export default class CreatePayment {
  private request: Request;
  private payment: ArcadierPaymentRequest | null;

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

    const pendingPayment = new ArcadierPaymentMapper().getInitialPayment(
      this.payment
    );

    const payment = await PaymentRepository.createPending(pendingPayment);

    return payment as Payment;
  }
}