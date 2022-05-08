import type { Payment as PaymentORM } from "@prisma/client";
import { Currency, PaymentStatus } from "@prisma/client";
import type { OrderItemEntity } from "./order-item";
import type { SupplierEntity } from "./supplier";

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

class PaymentEntity {
  createdAt?: PaymentORM["createdAt"];
  updatedAt?: PaymentORM["updatedAt"];
  description: PaymentORM["description"];
  currency: PaymentORM["currency"];
  amount: PaymentORM["amount"];
  id?: PaymentORM["id"];
  invoice: PaymentORM["invoice"];
  status: PaymentORM["status"];
  supplier?: SupplierEntity;
  additionalData: GiggedOrderDetails;
  supplierId: PaymentORM["supplierId"];
  orders: OrderItemEntity[];

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
    orders,
  }: Omit<PaymentORM, "id" | "createdAt" | "updatedAt"> &
    Partial<Pick<PaymentORM, "id" | "createdAt" | "updatedAt">> & {
      additionalData: GiggedOrderDetails;
      supplier?: SupplierEntity;
      orders?: OrderItemEntity[];
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
    this.orders = orders ?? [];
  }

  isValid() {
    return this.amount > 0;
  }

  isPending() {
    return this.status === PaymentStatus.Pending;
  }

  canBePaid() {
    return !!this.additionalData.qrCodeUrl && !this.additionalData.paymentKey;
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

    return this.orders && this.orders.length > 0;
  }

  json() {
    return {
      invoice: this.invoice,
      description: this.description,
      status: this.status,
      currency: this.currency,
      supplier: this.supplier?.json(),
      additionalData: this.additionalData,
      amount: this.amount,
      createdAt: this.createdAt,
      id: this.id,
      orders: this.orders.map((order) => order.json()),
    };
  }
}

export default PaymentEntity;
