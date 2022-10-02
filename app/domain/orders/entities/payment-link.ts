import { PaymentLink as PaymentLinkORM, PaymentLinkStatus as PaymentLinkStatusORM } from '@prisma/client';

const PaymentLinkStatus = PaymentLinkStatusORM;
const PaymentLink = PaymentLinkORM;

export { PaymentLinkStatus, PaymentLink };

export class PaymentLinkEntity {
  id?: PaymentLinkORM['id'];
  url: PaymentLinkORM['url'];
  status: PaymentLinkORM['status'];

  constructor(paymentLink: Partial<PaymentLinkORM>) {
    this.id = paymentLink.id;
    this.url = paymentLink.url as string;
    this.status = paymentLink.status as PaymentLinkStatusORM;
  }

  isOrderable() {
    return this.status === PaymentLinkStatus.Pending;
  }

  json() {
    return {
      url: this.url,
      status: this.status,
    } as PaymentLinkDTO;
  }
}

export type PaymentLinkDTO = Pick<PaymentLinkEntity, 'url' | 'status'>;
