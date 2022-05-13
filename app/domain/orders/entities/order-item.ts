import type { OrderItem as OrderItemORM } from '@prisma/client';
import type { OrderEntity } from './order';

export class OrderItemEntity {
  id?: OrderItemORM['id'];
  name: OrderItemORM['name'];
  currency: OrderItemORM['currency'];
  description: OrderItemORM['description'];
  price: OrderItemORM['price'];
  quantity: OrderItemORM['quantity'];
  orderId: OrderItemORM['orderId'];
  order?: OrderEntity;

  constructor({
    id,
    name,
    currency,
    description,
    price,
    quantity,
    orderId,
    order,
  }: Omit<OrderItemORM, 'id'> & {
    id?: OrderItemEntity['id'];
    order?: OrderEntity;
  }) {
    this.id = id;
    this.name = name;
    this.currency = currency;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.orderId = orderId;
    this.order = order;
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      currency: this.currency,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      orderId: this.orderId,
    } as OrderItemDTO;
  }
}

export type OrderItemDTO = Pick<OrderItemEntity, 'currency' | 'id' | 'description' | 'price' | 'quantity' | 'name'>;
