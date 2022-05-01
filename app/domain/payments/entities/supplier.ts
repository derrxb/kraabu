import { SupplierORM } from "~/infrastructure/database";
import { EKyashEntity } from "./ekyash";

export class SupplierEntity {
  id: SupplierORM["id"];
  name: SupplierORM["name"];
  tag: SupplierORM["tag"];
  logoUrl: SupplierORM["logoUrl"];
  homepage: SupplierORM["homepage"];
  ekyash?: EKyashEntity;
  username: SupplierORM["username"];
  ekyashId: SupplierORM["ekyashId"] | null;

  constructor({
    id,
    name,
    tag,
    logoUrl,
    homepage,
    ekyash,
    username,
    ekyashId,
  }: SupplierORM & { ekyash?: EKyashEntity }) {
    this.id = id;
    this.name = name;
    this.tag = tag;
    this.logoUrl = logoUrl;
    this.homepage = homepage;
    this.ekyash = ekyash;
    this.username = username;
    this.ekyashId = ekyashId;
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      tag: this.tag,
      logoUrl: this.logoUrl,
      homepage: this.homepage,
      ekyash: this.ekyash?.json(),
    };
  }
}
