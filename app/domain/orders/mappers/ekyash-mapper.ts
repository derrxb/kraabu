import type { EKyashEntity } from '../entities/ekyash';
import type { OrderEntity } from '../entities/order';
import { createNewInvoice, getAuthorization } from '../library/ekyash-api';

export class EKyashMapper {
  private session: string | null;
  private ekyash: EKyashEntity;

  constructor(ekyash: EKyashEntity) {
    this.ekyash = ekyash;
    this.session = null;
    this.ekyash = ekyash;
  }

  async initialize() {
    await this.setSessionId();
  }

  private async setSessionId() {
    const response = await getAuthorization(
      { pinHash: this.ekyash?.pinHash, pushkey: '', sid: String(this.ekyash?.sid) },
      this.ekyash,
    );

    this.session = response.session;
  }

  async createInvoice(order: OrderEntity) {
    const invoice = await createNewInvoice(
      {
        amount: order.amount,
        description: order.description,
        currency: 'BZD',
        orderId: order.invoice,
        session: this.session as string,
      },
      this.ekyash,
    );

    return invoice;
  }
}
