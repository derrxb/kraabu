import { EKyashEntity } from '../entities/ekyash';

export class EKyashRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new EKyashEntity({
      id: data.id,
      phone: data.phone,
      pinEncoded: data.pinEncoded,
      pinHash: data.pinHash,
      sid: data.sid,
      apiKey: data.apiKey,
    });
  }
}
