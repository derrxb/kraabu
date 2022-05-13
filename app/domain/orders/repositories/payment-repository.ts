import prisma from '~/infrastructure/database/index.server';
import { OrderEntity, OrderStatus } from '../entities/payment';
import type { SupplierEntity } from '../entities/supplier';
import type { NewInvoiceResponse } from '../library/ekyash-api';
import OrderItemRepository from './order-item-repository';
import { SupplierRepository } from './supplier-repository';

export default class PaymentRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const supplier = await SupplierRepository.rebuildEntity(data.supplier);
    const orderItems = data.orderItems?.map((orderItem: any) => OrderItemRepository.rebuildEntity(orderItem)) || [];

    return new OrderEntity({
      orderItems,
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

  static async createPending(data: OrderEntity, supplier: SupplierEntity) {
    const result = await prisma.order.create({
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
    const result = await prisma.order.findFirst({
      where: { invoice: invoice },
      include: { orderItems: true, supplier: { include: { ekyash: true } } },
    });

    return await this.rebuildEntity(result);
  }

  static async setOrderDetailsAndPaymentCode(payment: OrderEntity, invoice?: NewInvoiceResponse, orderDetails?: any) {
    const result = await prisma.order.update({
      data: {
        amount: orderDetails?.amount,
        currency: orderDetails?.currency,
        additionalData: {
          ...payment.additionalData,
          qrCodeUrl: invoice?.qrUrl,
          payer: orderDetails?.payer,
        },
        orderItems: orderDetails?.orderItems
          ? {
              createMany: {
                data: orderDetails?.orderItems?.map((order: any) => ({
                  description: order.description,
                  name: order.name,
                  price: order.price,
                  quantity: order.quantity,
                  currency: order.currency,
                })),
                skipDuplicates: true,
              },
            }
          : undefined,
      },
      where: { id: payment.id },
      include: { orderItems: true, supplier: { include: { ekyash: true } } },
    });

    return this.rebuildEntity(result);
  }

  static async setPaymentAsCompleted(payment: OrderEntity) {
    const result = await prisma.order.update({
      data: { status: OrderStatus.Completed },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }

  static async setPaymentAsRejected(payment: OrderEntity) {
    const result = await prisma.order.update({
      data: { status: OrderStatus.Failed },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }
}
