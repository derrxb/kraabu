import Payment from "../entities/payment";
import { createNewInvoice, getAuthorization } from "../library/ekyash-api";

export class EKyashMapper {
  private sid: number;
  private pinHash: string;
  private pushKey = "{{pushkey}}";
  private session: string | null;

  constructor(sid: number, pinHash: string) {
    this.sid = sid;
    this.pinHash = pinHash;
    this.session = null;
  }

  async initialize() {
    await this.setSessionId();
  }

  private async setSessionId() {
    const response = await getAuthorization({
      pinHash: this.pinHash,
      pushKey: this.pushKey,
      sid: this.sid,
    });

    this.session = response.session;
  }

  async createInvoice(payment: Payment) {
    const invoice = await createNewInvoice({
      amount: payment.currency.amount,
      description: payment.description,
      currency: "BZD",
      orderId: payment.invoice,
      session: this.session as string,
    });

    return invoice;
  }
}
