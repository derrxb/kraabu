import { EKyashTransactionEntity } from '../entities/ekyash-transaction';

export class EKyashTransactionRepository {
  static async rebuildData(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new EKyashTransactionEntity({
      deepLinkUrl: data.deepLinkUrl,
      id: data.id,
      status: data.status,
      invoiceId: data.invoiceId,
      invoiceUrl: data.invoiceUrl,
      orderId: data.orderId,
      qrCodeUrl: data.qrCodeUrl,
      transactionId: data.transactionId,
    });
  }
}
