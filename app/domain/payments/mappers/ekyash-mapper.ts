import { EKyashEntity } from "../entities/ekyash";
import PaymentEntity from "../entities/payment";
import { createNewInvoice, getAuthorization } from "../library/ekyash-api";

export class EKyashMapper {
  private session: string | null;
  private ekyash: EKyashEntity;

  constructor(ekyash: EKyashEntity) {
    this.ekyash = ekyash;
    this.session = null;
  }

  async initialize() {
    await this.setSessionId();
  }

  private async setSessionId() {
    const response = await getAuthorization(this.ekyash);

    this.session = response.session;
  }

  async createInvoice(payment: PaymentEntity) {
    const invoice = await createNewInvoice(
      {
        amount: payment.amount,
        description: payment.description,
        currency: "BZD",
        orderId: payment.invoice,
        session: this.session as string,
      },
      this.ekyash
    );

    return invoice;
  }
}
