import type { OrderEntity } from '~/domain/orders/entities/order';
import type { UserEntity } from '~/domain/orders/entities/user';
import type { GiggedOrderHandshake } from '~/domain/orders/library/gigged-api';
import GiggedMapper from '~/domain/orders/mappers/gigged-mapper.server';
import OrderRepository from '~/domain/orders/repositories/order-repository';
import { UserRepository } from '~/domain/orders/repositories/user-repository';
import Failure from '~/lib/failure';
import { logLongTasks, LONG_TASKS_THRESHOLD } from '~/lib/long-tasks-logging';
import createdPendingGiggedPaymentSchema from '~/presentation/requests/create-pending-gigged-payment';
import { GIGGED_USERNAME } from '.';

/**
 * Creates a bare payment record in the database with no order details nor payment url.
 */
export default class CreateOrder {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async verifyParams(): Promise<GiggedOrderHandshake> {
    const body = await this.request.json();

    if (!body.total) {
      throw new Failure('bad_request', '`total` is required.');
    }

    return await createdPendingGiggedPaymentSchema.validateAsync({
      ...body,
      total: Number(body.total).toString(),
    });
  }

  async createPayment(supplier: UserEntity, order: GiggedOrderHandshake): Promise<OrderEntity> {
    try {
      const startTime = Date.now();
      const payment = await OrderRepository.createPendingEkyashOrder(
        new GiggedMapper(order.gateway, order.hashkey).getPaymentFromHandshake(order, supplier),
        supplier,
      );
      const endTime = Date.now();

      logLongTasks(startTime, endTime, LONG_TASKS_THRESHOLD, 'CreatePendingPayment');

      if (!payment) {
        throw new Failure('cannot_process', 'Something unexpected occurred while creating pending payment.');
      }

      return payment;
    } catch (e) {
      throw new Failure('internal_error', 'Something unexpected occurred while creating pending payment.');
    }
  }

  async call(): Promise<OrderEntity> {
    try {
      const order = await this.verifyParams();
      const supplier = await UserRepository.findUserByUsername(GIGGED_USERNAME);

      if (!supplier) {
        throw new Failure('not_found', `There is no supplier with the username: ` + GIGGED_USERNAME);
      }

      return await this.createPayment(supplier, order);
    } catch (e) {
      throw e;
    }
  }
}
