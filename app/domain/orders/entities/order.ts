import type { Order as OrderORM } from '@prisma/client';
import { Currency as CurrencyORM, OrderStatus as OrderStatusORM } from '@prisma/client';
import type { EKyashTransactionDTO, EKyashTransactionEntity } from './ekyash-transaction';
import type { OrderItemDTO, OrderItemEntity } from './order-item';

const OrderStatus = OrderStatusORM;
const Currency = CurrencyORM;

export { OrderStatus, Currency };

export type GiggedOrderDetails = {
  gateway?: string;
  hashkey?: string;
  paymentKey?: string;
  payer?: {
    name: string;
    email: string;
  };
};

export class OrderEntity {
  createdAt?: OrderORM['createdAt'];
  updatedAt?: OrderORM['updatedAt'];
  description: OrderORM['description'];
  currency: OrderORM['currency'];
  amount: OrderORM['amount'];
  id?: OrderORM['id'];
  invoice: OrderORM['invoice'];
  status: OrderORM['status'];
  additionalData: GiggedOrderDetails;
  userId: OrderORM['userId'];
  orderItems: OrderItemEntity[];
  ekyashTransaction?: EKyashTransactionEntity;

  constructor({
    additionalData,
    createdAt,
    currency,
    amount,
    description,
    id,
    invoice,
    status,
    userId,
    orderItems,
    ekyashTransaction,
  }: Omit<OrderORM, 'id' | 'createdAt' | 'updatedAt'> &
    Partial<Pick<OrderORM, 'id' | 'createdAt' | 'updatedAt'>> & {
      additionalData: GiggedOrderDetails;
      orderItems?: OrderItemEntity[];
      ekyashTransaction?: EKyashTransactionEntity;
    }) {
    this.amount = amount;
    this.additionalData = additionalData;
    this.createdAt = createdAt;
    this.currency = currency;
    this.description = description;
    this.id = id;
    this.invoice = invoice;
    this.status = status;
    this.userId = userId;
    this.orderItems = orderItems ?? [];
    this.ekyashTransaction = ekyashTransaction;
  }

  isValid() {
    return this.amount > 0;
  }

  isPending() {
    return this.status === OrderStatus.Pending;
  }

  canBePaid() {
    return this.hasOrderDetails() && this.hasQrCode();
  }

  canMarkInProgress() {
    return this.isPending();
  }

  hasQrCode() {
    return this.ekyashTransaction?.qrCodeUrl;
  }

  hasOrderDetails() {
    return this.orderItems && this.orderItems.length > 0;
  }

  isValidPaymentKey(paymentKey: string) {
    return this.additionalData.paymentKey === paymentKey;
  }

  json() {
    return {
      invoice: this.invoice,
      description: this.description,
      status: this.status,
      currency: this.currency,
      additionalData: this.additionalData,
      amount: this.amount,
      createdAt: this.createdAt,
      id: this.id,
      orderItems: this.orderItems.map((order) => order.json()),
      ekyashTransaction: this.ekyashTransaction?.json(),
    } as OrderDTO;
  }
}

export type OrderDTO = Pick<
  OrderEntity,
  'invoice' | 'description' | 'status' | 'currency' | 'additionalData' | 'amount' | 'createdAt' | 'id'
> & { orderItems: OrderItemDTO[]; ekyashTransaction?: EKyashTransactionDTO };
