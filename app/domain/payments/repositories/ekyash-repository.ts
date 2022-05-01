import { EKyashEntity } from "../entities/ekyash";

export class EKyashRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === "undefined") {
      return undefined;
    }

    return new EKyashEntity({
      api: data.api,
      id: data.id,
      phone: data.phone,
      pinEncoded: data.pin_encoded,
      pinHash: data.pin_hash,
      sid: data.sid,
    });
  }
}
