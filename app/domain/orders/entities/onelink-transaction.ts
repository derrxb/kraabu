import { OneLinkStatus, type OneLinkTransaction as OneLinkTransactionORM } from '@prisma/client';

export class OneLinkTransactionEntity implements OneLinkTransactionORM {
  id: OneLinkTransactionORM['id'];
  createdAt: OneLinkTransactionORM['createdAt'];
  updatedAt: OneLinkTransactionORM['updatedAt'];
  status: OneLinkTransactionORM['status'];
  invoiceId: OneLinkTransactionORM['invoiceId'];
  transactionId: OneLinkTransactionORM['transactionId'];
  invoiceUrl: OneLinkTransactionORM['invoiceUrl'];
  orderId: OneLinkTransactionORM['orderId'];

  constructor(props: OneLinkTransactionORM) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
    this.status = props.status;
    this.invoiceId = props.invoiceId;
    this.transactionId = props.transactionId;
    this.invoiceUrl = props.invoiceUrl;
    this.orderId = props.orderId;
  }

  isCompleted() {
    return this.status === OneLinkStatus.Success;
  }

  json() {
    return {
      id: this.id,
      status: this.status,
    } as OneLinkTransactionDTO;
  }
}

export type OneLinkTransactionDTO = Omit<OneLinkTransactionEntity, ''>;
