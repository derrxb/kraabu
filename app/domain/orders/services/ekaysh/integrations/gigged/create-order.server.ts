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
import { getErrorMessage } from '~/lib/error-messages';

/**
 * Creates a bare order record in the database with no order details nor order url.
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

  async createOrder(supplier: UserEntity, orderHandshake: GiggedOrderHandshake): Promise<OrderEntity> {
    try {
      const startTime = Date.now();
      const order = await OrderRepository.createPendingOrder(
        new GiggedMapper(orderHandshake.gateway, orderHandshake.hashkey).getOrderFromHandshake(
          orderHandshake,
          supplier,
        ),
        supplier,
      );
      const endTime = Date.now();

      logLongTasks(startTime, endTime, LONG_TASKS_THRESHOLD, 'CreatePendingOrder');

      if (!order) {
        throw new Failure('cannot_process', 'Something unexpected occurred while creating pending order.');
      }

      return order;
    } catch (e) {
      console.log(e);
      throw new Failure(
        'internal_error',
        'Something unexpected occurred while creating pending order. ' + getErrorMessage(e),
      );
    }
  }

  async call(): Promise<OrderEntity> {
    try {
      const order = await this.verifyParams();
      const supplier = await UserRepository.findUserByUsername(GIGGED_USERNAME);

      if (!supplier) {
        throw new Failure('not_found', `There is no supplier with the username: ` + GIGGED_USERNAME);
      }

      return await this.createOrder(supplier, order);
    } catch (e) {
      throw e;
    }
  }
}
