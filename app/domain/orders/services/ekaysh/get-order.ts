import type { Params } from 'react-router';
import type { OrderEntity } from '~/domain/orders/entities/order';
import OrderRepository from '~/domain/orders/repositories/order-repository';
import Failure from '~/lib/failure';

export default class GetOrder {
  private params: Params;

  constructor(params: Params) {
    this.params = params;
  }

  async call(): Promise<OrderEntity> {
    const { id } = this.params;

    if (!id) {
      throw new Failure('cannot_process', 'An order `invoice` is required.');
    }

    const order = await OrderRepository.getByInvoice(id);

    if (order) {
      return order;
    }

    throw new Failure('not_found', 'An order with the given `invoice` does not exist.');
  }
}
