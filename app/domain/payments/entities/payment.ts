import { Currency, Payment as PaymentORM, PaymentStatus } from "@prisma/client";
import Failure from "~/lib/failure";
import { SupplierEntity } from "./supplier";

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
  order?: {
    id: string;
    name: string;
    quantity: number;
    description: string;
    price: number;
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
  }: Omit<PaymentORM, "id" | "createdAt" | "updatedAt"> &
    Partial<Pick<PaymentORM, "id" | "createdAt" | "updatedAt">> & {
      additionalData: GiggedOrderDetails;
      supplier?: SupplierEntity;
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

    switch (this.supplier?.username) {
      case "giggedbz":
        if (!this.additionalData.order) {
          return false;
        }
        return true;
      default:
        throw new Failure("cannot_process", "Unsupported user");
    }
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
    };
  }
}

export default PaymentEntity;
