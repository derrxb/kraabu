import { Ekyash as EKyashORM } from "@prisma/client";

export class EKyashEntity {
  id: EKyashORM["id"];
  api: EKyashORM["api"];
  pinHash: EKyashORM["pinHash"];
  pinEncoded: EKyashORM["pinEncoded"];
  phone: EKyashORM["phone"];
  sid: EKyashORM["sid"];
  pushKey: string;

  constructor({
    id,
    api,
    pinHash,
    pinEncoded,
    phone,
    sid,
  }: Omit<EKyashORM, "createdAt" | "updatedAt">) {
    this.id = id;
    this.api = api;
    this.pinHash = pinHash;
    this.pinEncoded = pinEncoded;
    this.phone = phone;
    this.sid = sid;
    this.pushKey = "{{pushkey}}";
  }

  isValid() {
    return this.pinEncoded && this.pinHash && this.phone;
  }

  json() {
    return {
      id: this.id,
      phone: this.phone,
    };
  }
}
