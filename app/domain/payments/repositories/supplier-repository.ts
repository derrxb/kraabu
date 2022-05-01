import { supabase } from "~/config/index.server";
import { Tables } from ".";
import { Supplier } from "../entities/supplier";
import { EKyashRepository } from "./ekyash-repository";

export class SupplierRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === "undefined") {
      return null;
    }

    return new Supplier({
      id: data.id,
      homepage: data.homepage,
      logo_url: data.logo_url,
      name: data.name,
      tag: data.name,
      ekyash: await EKyashRepository.rebuildEntity(data.ekyash),
    });
  }

  static async findSupplierByUsername(username: string) {
    const result = await supabase
      .from(Tables.Suppliers)
      .select("*, ekyash:ekyash (*)")
      .eq("username", username);

    return await this.rebuildEntity(result.body?.[0]);
  }
}
