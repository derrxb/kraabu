import prisma from "~/infrastructure/database";
import { SupplierEntity } from "../entities/supplier";
import { EKyashRepository } from "./ekyash-repository";

export class SupplierRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === "undefined") {
      return undefined;
    }

    const ekyash = await EKyashRepository.rebuildEntity(data.ekyash);

    return new SupplierEntity({
      id: data.id,
      homepage: data.homepage,
      logoUrl: data.logoUrl,
      name: data.name,
      tag: data.name,
      ekyashId: ekyash?.id ?? null,
      username: data.username,
      ekyash: ekyash,
    });
  }

  static async findSupplierByUsername(username: string) {
    const result = await prisma.supplier.findFirst({
      where: { username: username },
      include: { ekyash: true },
    });

    return await this.rebuildEntity(result);
  }
}
