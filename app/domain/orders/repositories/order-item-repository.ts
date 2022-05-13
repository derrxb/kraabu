import { OrderItemEntity } from '../entities/order-item';

export default class OrderItemRepository {
  static rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new OrderItemEntity({
      id: data.id,
      currency: data.currency,
      description: data.description,
      name: data.name,
      orderId: data.orderId,
      price: data.price,
      quantity: data.quantity,
      order: data.order,
    });
  }
}
