import type { Ekyash as EkyashORM } from '@prisma/client';

export class EKyashEntity {
  id: EkyashORM['id'];
  pinHash: EkyashORM['pinHash'];
  pinEncoded: EkyashORM['pinEncoded'];
  phone: EkyashORM['phone'];
  sid: EkyashORM['sid'];
  pushKey: string;
  apiKey: string;

  constructor({ id, pinHash, pinEncoded, phone, sid, apiKey }: Omit<EkyashORM, 'createdAt' | 'updatedAt'>) {
    this.id = id;
    this.pinHash = pinHash;
    this.pinEncoded = pinEncoded;
    this.phone = phone;
    this.sid = sid;
    this.pushKey = '{{pushkey}}';
    this.apiKey = apiKey;
  }

  isValid() {
    return this.pinEncoded && this.pinHash && this.phone;
  }

  json() {
    return {
      id: this.id,
      phone: this.phone,
    } as EkyashDTO;
  }
}

export type EkyashDTO = Pick<EKyashEntity, 'id' | 'phone'>;
