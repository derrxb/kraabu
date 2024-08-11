import { OneLinkTransactionEntity } from '../entities/onelink-transaction';

export class OneLinkTransactionRepository {
  static async rebuildData(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new OneLinkTransactionEntity({
      createdAt: data?.createdAt,
      id: data?.id,
      invoiceId: data?.invoiceId,
      invoiceUrl: data?.invoiceUrl,
      orderId: data?.orderId,
      status: data?.status,
      transactionId: data?.transactionId,
      updatedAt: data?.updatedAt,
    });
  }
}
