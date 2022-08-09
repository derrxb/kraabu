import type { PaymentLink as PaymentLinkORM } from '@prisma/client';

export class PaymentLinkEntity {
  id?: PaymentLinkORM['id'];
  url: PaymentLinkORM['url'];

  constructor(paymentLink: Partial<PaymentLinkORM>) {
    this.id = paymentLink.id;
    this.url = paymentLink.url as string;
  }

  json() {
    return {
      url: this.url,
    } as PaymentLinkDTO;
  }
}

export type PaymentLinkDTO = Pick<PaymentLinkEntity, 'url'>;
