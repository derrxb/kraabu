export const enum PaymentStatus {
  Pending,
  InProgress,
  Completed,
}

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
  additionalData: {
    [key: string]: string | number;
  };
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

  canMarkInProgress() {
    return this.isPending();
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
