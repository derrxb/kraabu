import Failure from "~/lib/failure";

export const enum PaymentStatus {
  Pending,
  InProgress,
  Completed,
  Failure,
}

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

type Props = {
  status: PaymentStatus;
  user: string;
  id?: number;
  currency: {
    amount: number;
    type: string;
  };
  description: string;
  createdAt?: any;
  invoice: string;
  additionalData: GiggedOrderDetails;
};

class Payment {
  additionalData: Props["additionalData"];
  createdAt: Props["createdAt"];
  currency: Props["currency"];
  description: Props["description"];
  id: Props["id"];
  invoice: Props["invoice"];
  status: Props["status"];
  user: Props["user"];

  constructor({
    additionalData,
    createdAt,
    currency,
    description,
    id,
    invoice,
    status,
    user,
  }: Props) {
    this.additionalData = additionalData;
    this.createdAt = createdAt;
    this.currency = currency;
    this.description = description;
    this.id = id;
    this.invoice = invoice;
    this.status = status;
    this.user = user;
  }

  isValid() {
    return this.currency.amount > 0;
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
    switch (this.user) {
      case "giggedBz":
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
    };
  }
}

export default Payment;
