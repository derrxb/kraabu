import { OneLinkEntity } from '../entities/onelink';
import { OrderEntity } from '../entities/order';
import { NewPaymentData, createNewInvoice } from '../library/onelink-api';

export class OneLinkMapper {
  private oneLink: OneLinkEntity;

  constructor(oneLink: OneLinkEntity) {
    this.oneLink = oneLink;
  }

  async createRequest(
    order: OrderEntity,
    card: Pick<NewPaymentData, 'cardNumber' | 'ccv' | 'expirationDate' | 'nameOnCard'>,
  ) {
    const invoice = await createNewInvoice(
      {
        amount: order.amount.toString(),
        cardNumber: card.cardNumber,
        ccv: card.ccv,
        expirationDate: card.expirationDate,
        nameOnCard: card.nameOnCard,
      },
      this.oneLink,
    );
    return invoice;
  }
}
