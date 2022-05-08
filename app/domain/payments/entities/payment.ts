import type { Payment as PaymentORM } from '@prisma/client';
import { Currency, PaymentStatus } from '@prisma/client';
import type { OrderItemDTO, OrderItemEntity } from './order-item';
import type { SupplierDTO, SupplierEntity } from './supplier';

export { PaymentStatus, Currency };

export type GiggedOrderDetails = {
  qrCodeUrl?: string;
  gateway?: string;
  hashkey?: string;
  paymentKey?: string;
  payer?: {
    name: string;
    email: string;
  };
};

export class PaymentEntity {
  createdAt?: PaymentORM['createdAt'];
  updatedAt?: PaymentORM['updatedAt'];
  description: PaymentORM['description'];
  currency: PaymentORM['currency'];
  amount: PaymentORM['amount'];
  id?: PaymentORM['id'];
  invoice: PaymentORM['invoice'];
  status: PaymentORM['status'];
  supplier?: SupplierEntity;
  additionalData: GiggedOrderDetails;
  supplierId: PaymentORM['supplierId'];
  orderItems: OrderItemEntity[];

  constructor({
    additionalData,
    createdAt,
    currency,
    amount,
    description,
    id,
    invoice,
    status,
    supplier,
    supplierId,
    orderItems,
  }: Omit<PaymentORM, 'id' | 'createdAt' | 'updatedAt'> &
    Partial<Pick<PaymentORM, 'id' | 'createdAt' | 'updatedAt'>> & {
      additionalData: GiggedOrderDetails;
      supplier?: SupplierEntity;
      orderItems?: OrderItemEntity[];
    }) {
    this.amount = amount;
    this.additionalData = additionalData;
    this.createdAt = createdAt;
    this.currency = currency;
    this.description = description;
    this.id = id;
    this.invoice = invoice;
    this.status = status;
    this.supplier = supplier;
    this.supplierId = supplierId;
    this.orderItems = orderItems ?? [];
  }

  isValid() {
    return this.amount > 0;
  }

  isPending() {
    return this.status === PaymentStatus.Pending;
  }

  canBePaid() {
    return this.hasOrderDetails() && this.hasQrCode();
  }

  canMarkInProgress() {
    return this.isPending();
  }

  hasQrCode() {
    return this.additionalData.qrCodeUrl;
  }

  hasOrderDetails() {
    if (!this.supplier || !this.supplier) {
      return false;
    }

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
      supplier: this.supplier?.json(),
      orderItems: this.orderItems.map((order) => order.json()),
    };
  }
}

export type PaymentDTO = Pick<
  PaymentEntity,
  'invoice' | 'description' | 'status' | 'currency' | 'additionalData' | 'amount' | 'createdAt' | 'id'
> & { supplier: SupplierDTO; orderItems: OrderItemDTO[] };
