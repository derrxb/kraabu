import type { ArcadierPaymentRequest } from "~/domain/payments/library/arcadier-api";
import createPendingEkyashPaymentSchema from "~/requests/create-pending-ekyash-payment";
import Payment from "../entities/payment";
import ArcadierPaymentMapper from "../mappers/arcadier-payment-mapper";
import PaymentRepository from "../repositories/payment-repository";

export default class CreatePendingEkyashPayment {
  private request: Request;
  private payment: ArcadierPaymentRequest | null;

  constructor(request: Request) {
    this.request = request;
    this.payment = null;
  }

  async verifyPaymentParams() {
    const body = await this.request.json();

    this.payment = await createPendingEkyashPaymentSchema.validateAsync({
      ...body,
      total: Number(body.total).toString(), // ensure string
    });
  }

  async call(): Promise<Payment> {
    await this.verifyPaymentParams();

    if (!this.payment) {
      throw new Error("No data from arcadier received.");
    }

    const pendingPayment = new ArcadierPaymentMapper().getPending(this.payment);
    const payment = await PaymentRepository.createPending(pendingPayment);

    return payment as Payment;
  }
}
