import { EKyashTransactionEntity } from '../entities/ekyash-transaction';

export class EKyashTransactionRepository {
  static async rebuildData(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new EKyashTransactionEntity({
      ...data,
    });
  }
}
