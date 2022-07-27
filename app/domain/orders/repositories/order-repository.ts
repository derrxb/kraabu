import type { OrderItem } from '@prisma/client';
import { EKyashStatus } from '@prisma/client';
import prisma from '~/infrastructure/database/index.server';
import type { EKyashTransactionEntity } from '../entities/ekyash-transaction';
import { OrderEntity, OrderStatus } from '../entities/order';
import type { UserEntity } from '../entities/user';
import type { NewInvoiceResponse } from '../library/ekyash-api';
import { EKyashTransactionRepository } from './e-kyash-transaction-repository';
import OrderItemRepository from './order-item-repository';

export default class OrderRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const orderItems = data.orderItems?.map((orderItem: OrderItem) => OrderItemRepository.rebuildEntity(orderItem)) || [];
    const ekyashTransaction = await EKyashTransactionRepository.rebuildData(data.ekyashTransaction);

    return new OrderEntity({
      orderItems,
      additionalData: data?.additionalData,
      amount: data?.amount,
      currency: data.currency,
      description: data?.description,
      id: data.id,
      invoice: data.invoice,
      status: data.status,
      ekyashTransaction: ekyashTransaction,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      userId: data.userId,
      productId: data.productId,
    });
  }

  static async createPending(data: OrderEntity, user: UserEntity) {
    const result = await prisma.order.create({
      data: {
        additionalData: data.additionalData,
        amount: data.amount,
        currency: data.currency,
        description: data.description,
        invoice: data.invoice,
        status: data.status,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return this.rebuildEntity(result);
  }

  /**
   * Gets and returns a payment by invoice. Includes a payment's orderItems, supplier & their integrations
   * @param invoice
   * @returns
   */
  static async getPaymentByInvoice(invoice: string) {
    const result = await prisma.order.findFirst({
      where: { invoice: invoice },
      include: { ekyashTransaction: true, orderItems: true, user: { include: { ekyash: true } } },
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
          payer: orderDetails?.payer,
        },
        ekyashTransaction: {
          create: {
            deepLinkUrl: String(invoice?.paymentLink),
            invoiceId: String(invoice?.invoiceId),
            qrCodeUrl: String(invoice?.qrUrl),
            status: EKyashStatus.Pending,
          },
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
      include: { ekyashTransaction: true, orderItems: true, user: { include: { ekyash: true } } },
    });

    return this.rebuildEntity(result);
  }

  static async setEkyashPaymentAsCompleted(
    payment: OrderEntity,
    transaction: Pick<EKyashTransactionEntity, 'transactionId' | 'status'>,
  ) {
    const result = await prisma.order.update({
      data: {
        status: OrderStatus.Completed,
        ekyashTransaction: {
          update: {
            transactionId: transaction.transactionId,
            status: transaction.status,
          },
        },
      },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }

  static async setEkyashPaymentAsRejected(
    payment: OrderEntity,
    transaction: Pick<EKyashTransactionEntity, 'transactionId' | 'status'>,
  ) {
    const result = await prisma.order.update({
      data: {
        status: OrderStatus.Failed,
        ekyashTransaction: {
          update: {
            transactionId: transaction.transactionId,
            status: transaction.status,
          },
        },
      },
      where: { id: payment.id },
    });

    return this.rebuildEntity(result);
  }
}
