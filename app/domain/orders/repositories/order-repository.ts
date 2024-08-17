import type { OrderItem } from '@prisma/client';
import { EKyashStatus, OneLinkStatus } from '@prisma/client';
import prisma from '~/infrastructure/database/index.server';
import type { EKyashTransactionEntity } from '../entities/ekyash-transaction';
import { OrderEntity, OrderStatus } from '../entities/order';
import type { UserEntity } from '../entities/user';
import { TransactionStatus, type NewInvoiceResponse } from '../library/ekyash-api';
import { EKyashTransactionRepository } from './e-kyash-transaction-repository';
import { OneLinkTransactionRepository } from './one-link-transaction-repository';
import OrderItemRepository from './order-item-repository';
import { UserRepository } from './user-repository';
import { nanoid } from 'nanoid';
import { PaymentMethod } from '../services/ekaysh/integrations/gigged';

export default class OrderRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const user = await UserRepository.rebuildEntity(data.user);
    const orderItems =
      data.orderItems?.map((orderItem: OrderItem) => OrderItemRepository.rebuildEntity(orderItem)) || [];
    const ekyashTransaction = await EKyashTransactionRepository.rebuildData(data.ekyashTransaction);
    const oneLinkTransaction = await OneLinkTransactionRepository.rebuildData(data?.oneLinkTransaction);

    return new OrderEntity({
      user,
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
      oneLinkTransaction,
    });
  }

  static async createPendingOrder(data: OrderEntity, user: UserEntity) {
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
   * Gets and returns an order by invoice. Includes an order's orderItems, supplier & their integrations
   * @param invoice
   * @returns
   */
  static async getByInvoice(invoice: string) {
    const result = await prisma.order.findFirst({
      where: { invoice: invoice },
      include: { ekyashTransaction: true, orderItems: true, user: { include: { ekyash: true } } },
    });

    return await this.rebuildEntity(result);
  }

  static async setOrderDetailsAndPaymentCode(
    order: OrderEntity,
    method: PaymentMethod,
    invoice?: NewInvoiceResponse,
    orderDetails?: any,
  ) {
    const result = await prisma.order.update({
      data: {
        amount: orderDetails?.amount,
        currency: orderDetails?.currency,
        additionalData: {
          ...order.additionalData,
          payer: orderDetails?.payer,
        },
        ...(method === PaymentMethod.EKyash
          ? {
              ekyashTransaction: {
                create: {
                  deepLinkUrl: String(invoice?.paymentLink),
                  invoiceId: String(invoice?.invoiceId),
                  qrCodeUrl: String(invoice?.qrUrl),
                  status: EKyashStatus.Pending,
                },
              },
            }
          : method === PaymentMethod.OneLink
            ? {
                oneLinkTransaction: {
                  create: {
                    invoiceUrl: String(invoice?.paymentLink),
                    invoiceId: String(invoice?.invoiceId),
                    status: OneLinkStatus.Pending,
                  },
                },
              }
            : {}),
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
      where: { id: order.id },
      include: {
        ekyashTransaction: true,
        oneLinkTransaction: true,
        orderItems: true,
        user: { include: { ekyash: true, oneLink: true } },
      },
    });

    return this.rebuildEntity(result);
  }

  static async setEkyashPaymentAsCompleted(
    order: OrderEntity,
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
      where: { id: order.id },
    });

    return this.rebuildEntity(result);
  }

  static async setEkyashOrderAsRejected(
    order: OrderEntity,
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
      where: { id: order.id },
    });

    return this.rebuildEntity(result);
  }

  static async markOneLinkPaymentAsRejected(order: OrderEntity) {
    const result = await prisma.order.update({
      data: {
        status: OrderStatus.Failed,
        oneLinkTransaction: {
          create: {
            transactionId: nanoid(),
            status: OneLinkStatus.Canceled,
          },
        },
      },
      where: {
        id: order.id,
      },
      include: {
        oneLinkTransaction: true,
      },
    });

    return this.rebuildEntity(result);
  }

  static async markOneLinkPaymentAsCompleted(order: OrderEntity) {
    const result = await prisma.order.update({
      data: {
        status: OrderStatus.Completed,
        oneLinkTransaction: {
          update: {
            transactionId: nanoid(),
            status: OneLinkStatus.Success,
          },
        },
      },
      where: {
        id: order.id,
      },
      include: {
        oneLinkTransaction: true,
      },
    });

    return this.rebuildEntity(result);
  }
}
