import type { PaymentLink as PaymentLinkORM } from '@prisma/client';
import { PaymentLinkStatus as PaymentLinkStatusORM } from '@prisma/client';

const PaymentLinkStatus = PaymentLinkStatusORM;

export { PaymentLinkStatus };

export class PaymentLinkEntity {
  id?: PaymentLinkORM['id'];
  url: PaymentLinkORM['url'];
  status: PaymentLinkORM['status'];

  constructor(paymentLink: Partial<PaymentLinkORM>) {
    this.id = paymentLink.id;
    this.url = paymentLink.url as string;
    this.status = paymentLink.status as PaymentLinkStatusORM;
  }

  json() {
    return {
      url: this.url,
      status: this.status,
    } as PaymentLinkDTO;
  }
}

export type PaymentLinkDTO = Pick<PaymentLinkEntity, 'url' | 'status'>;
