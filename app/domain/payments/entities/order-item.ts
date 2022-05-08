import type { OrderItem as OrderItemORM } from "@prisma/client";
import type PaymentEntity from "./payment";

class OrderItemEntity {
  id?: OrderItemORM["id"];
  name: OrderItemORM["name"];
  currency: OrderItemORM["currency"];
  description: OrderItemORM["description"];
  price: OrderItemORM["price"];
  quantity: OrderItemORM["quantity"];
  paymentId: OrderItemORM["paymentId"];
  payment?: PaymentEntity;

  constructor({
    id,
    name,
    currency,
    description,
    price,
    quantity,
    paymentId,
    payment,
  }: Omit<OrderItemORM, "id"> & {
    id?: OrderItemEntity["id"];
    payment?: PaymentEntity;
  }) {
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.paymentId = paymentId;
    this.payment = payment;
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      currency: this.currency,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      paymentId: this.paymentId,
    };
  }
}

export { OrderItemEntity };
