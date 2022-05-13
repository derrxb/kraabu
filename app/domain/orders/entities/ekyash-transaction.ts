import type { EKyashTransaction as EKyashTransactionORM } from '@prisma/client';

export class EKyashTransactionEntity {
  id: EKyashTransactionORM['id'];
  deepLinkUrl: EKyashTransactionORM['deepLinkUrl'];
  invoiceId: EKyashTransactionORM['invoiceId'];
  invoiceUrl: EKyashTransactionORM['invoiceUrl'];
  orderId: EKyashTransactionORM['orderId'];
  qrCodeUrl: EKyashTransactionORM['qrCodeUrl'];
  status: EKyashTransactionORM['status'];
  transactionId: EKyashTransactionORM['transactionId'];

  constructor({
    id,
    deepLinkUrl,
    invoiceId,
    invoiceUrl,
    orderId,
    qrCodeUrl,
    status,
    transactionId,
  }: Omit<EKyashTransactionORM, 'createdAt' | 'updatedAt'>) {
    this.id = id;
    this.deepLinkUrl = deepLinkUrl;
    this.invoiceId = invoiceId;
    this.invoiceUrl = invoiceUrl;
    this.orderId = orderId;
    this.qrCodeUrl = qrCodeUrl;
    this.status = status;
    this.transactionId = transactionId;
  }

  json() {
    return {
      id: this.id,
      deepLinkUrl: this.deepLinkUrl,
      invoiceId: this.invoiceId,
      invoiceUrl: this.invoiceUrl,
      orderId: this.orderId,
      qrCodeUrl: this.qrCodeUrl,
      status: this.status,
      transactionId: this.transactionId,
    } as EKyashTransactionDTO;
  }
}

export type EKyashTransactionDTO = Pick<
  EKyashTransactionEntity,
  'id' | 'deepLinkUrl' | 'invoiceId' | 'invoiceUrl' | 'orderId' | 'qrCodeUrl' | 'status' | 'transactionId'
>;
