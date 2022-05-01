type Props = {
  id: number;
  api: string;
  /**
   * Merchant ID provided by Ekyash
   */
  sid: number;
  /**
   * pinHash, provided by Ekyash: hash('sha256', md5('pin'))
   */
  pinHash: string;
  pinEncoded: string;
  phone: string;
  supplierId: string;
  /**
   * always provided as an empty string
   */
  pushKey: string;
};

export class EKyash {
  id: Props["id"];
  api: Props["api"];
  pinHash: Props["pinHash"];
  pinEncoded: Props["pinEncoded"];
  phone: Props["phone"];
  supplierId: Props["supplierId"];
  sid: Props["sid"];
  pushKey: Props["pushKey"];

  constructor({
    id,
    api,
    pinHash,
    pinEncoded,
    phone,
    supplierId,
    sid,
  }: Omit<Props, "pushKey">) {
    this.id = id;
    this.api = api;
    this.pinHash = pinHash;
    this.pinEncoded = pinEncoded;
    this.phone = phone;
    this.supplierId = supplierId;
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
