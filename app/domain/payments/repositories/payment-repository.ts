import { supabase } from "~/config/index.server";
import { Tables } from ".";
import Payment, { PaymentStatus } from "../entities/payment";

export default class PaymentRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === "undefined") {
      return null;
    }

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
    const result = await supabase.from(Tables.Payments).insert([
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

  static async getPaymentByInvoice(invoice: string) {
    const result = await supabase
      .from(Tables.Payments)
      .select("*")
      .eq("invoice", invoice);

    return this.rebuildEntity(result.body?.[0]);
  }

  static async setPaymentQrCodeUrl(payment: Payment, qrCodeUrl: string) {
    const result = await supabase
      .from(Tables.Payments)
      .update({
        additionalData: { qrCodeUrl, ...(payment.additionalData || {}) },
      })
      .eq("invoice", payment.invoice);

    return this.rebuildEntity(result.body?.[0]);
  }

  static async setPaymentAdditionalData(payment: Payment) {
    const result = await supabase
      .from(Tables.Payments)
      .update({
        additionalData: payment.additionalData,
      })
      .eq("invoice", payment.invoice);

    return this.rebuildEntity(result.body?.[0]);
  }

  static async setPaymentAsCompleted(payment: Payment) {
    const result = await supabase
      .from(Tables.Payments)
      .update({
        status: PaymentStatus.Completed,
      } as Partial<Payment>)
      .eq("invoice", payment.invoice);

    return this.rebuildEntity(result.body?.[0]);
  }

  static async setPaymentAsRejected(payment: Payment) {
    const result = await supabase
      .from(Tables.Payments)
      .update({
        status: PaymentStatus.Failure,
      } as Partial<Payment>)
      .eq("invoice", payment.invoice);

    return this.rebuildEntity(result.body?.[0]);
  }
}
