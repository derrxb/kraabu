import { OneLinkEntity } from '../entities/onelink';
import { OrderEntity } from '../entities/order';
import { NewPaymentData, createNewInvoice } from '../library/onelink-api';
import { OneLinkAmountValue } from '../values/onelink-amount';

export class OneLinkMapper {
  private oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>;

  constructor(oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>) {
    this.oneLink = oneLink;
  }

  async createRequest(
    order: OrderEntity,
    card: Pick<NewPaymentData, 'cardNumber' | 'ccv' | 'expirationDate' | 'nameOnCard'>,
  ) {
    const invoice = await createNewInvoice(
      {
        amount: new OneLinkAmountValue(order.amount, order.currency).toJSON().toString(),
        cardNumber: card.cardNumber,
        ccv: card.ccv,
        expirationDate: card.expirationDate,
        nameOnCard: card.nameOnCard,
        reason: order.invoice,
      },
      this.oneLink,
    );
    return invoice;
  }
}
