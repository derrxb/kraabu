import { supabase } from "~/config/index.server";
import Payment from "../entities/payment";

export default class PaymentRepository {
  static async rebuildEntity(data: any) {
    return new Payment({
      additionalData: data?.additionalData,
      currency: {
        amount: data?.amount,
        type: data.currency,
      },
      description: data?.description,
      id: data.id,
      invoice: data.invoice,
      status: data.status,
      user: data.user,
    });
  }

  static async createPending(data: Payment) {
    console.log({
      additionalData: data.additionalData,
      amount: data.currency.amount,
      currency: data.currency.type,
      description: data.description,
      invoice: data.invoice,
      status: data.status,
      user: data.user,
    });

    const result = await supabase.from("payments").insert([
      {
        additionalData: data.additionalData,
        amount: data.currency.amount,
        currency: data.currency.type,
        description: data.description,
        invoice: data.invoice,
        status: data.status,
        user: data.user,
      },
    ]);

    return this.rebuildEntity(result.body?.[0]);
  }
}
