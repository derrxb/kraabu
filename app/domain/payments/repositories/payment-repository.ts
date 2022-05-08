import prisma from "~/infrastructure/database/index.server";
import PaymentEntity, { PaymentStatus } from "../entities/payment";
import type { SupplierEntity } from "../entities/supplier";
import OrderItemRepository from "./order-item-repository";
import { SupplierRepository } from "./supplier-repository";

export default class PaymentRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === "undefined") {
      return undefined;
    }

    const supplier = await SupplierRepository.rebuildEntity(data.supplier);
    const orders =
      data.orders?.map((orderItem: any) =>
        OrderItemRepository.rebuildEntity(orderItem)
      ) || [];

    return new PaymentEntity({
      orders,
      supplier,
      additionalData: data?.additionalData,
      amount: data?.amount,
      currency: data.currency,
      description: data?.description,
      id: data.id,
      invoice: data.invoice,
      status: data.status,
      supplierId: supplier?.id as number,
    });
  }

  static async createPending(data: PaymentEntity, supplier: SupplierEntity) {
    const result = await prisma.payment.create({
      data: {
        additionalData: data.additionalData,
        amount: data.amount,
        currency: data.currency,
        description: data.description,
        invoice: data.invoice,
        status: data.status,
        supplier: {
          connect: {
            id: supplier.id,
          },
        },
      },
    });

    return this.rebuildEntity(result);
  }

  static async getPaymentByInvoice(invoice: string) {
    const result = await prisma.payment.findFirst({
      where: { invoice: invoice },
      include: { orderItems: true, supplier: { include: { ekyash: true } } },
    });

    return await this.rebuildEntity(result);
  }

  static async setPaymentQrCodeUrl(payment: PaymentEntity, qrCodeUrl: string) {
    const result = await prisma.payment.update({
      data: { additionalData: { qrCodeUrl, ...payment.additionalData } },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }

  static async setPaymentAdditionalData(payment: PaymentEntity) {
    const result = await prisma.payment.update({
      data: {
        additionalData: payment.additionalData,
        orderItems: {
          createMany: {
            data: payment.orders.map((order) => ({
              description: order.description,
              name: order.name,
              price: order.price,
              quantity: order.quantity,
              currency: order.currency,
            })),
            skipDuplicates: true,
          },
        },
      },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result) as Promise<PaymentEntity>;
  }

  static async setPaymentAsCompleted(payment: PaymentEntity) {
    const result = await prisma.payment.update({
      data: { status: PaymentStatus.Completed },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }

  static async setPaymentAsRejected(payment: PaymentEntity) {
    const result = await prisma.payment.update({
      data: { status: PaymentStatus.Failed },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }
}
