import type { OrderEntity } from '~/domain/orders/entities/order';
import type { SupplierEntity } from '~/domain/orders/entities/supplier';
import type { GiggedOrderHandshake } from '~/domain/orders/library/gigged-api';
import GiggedMapper from '~/domain/orders/mappers/gigged-mapper';
import PaymentRepository from '~/domain/orders/repositories/payment-repository';
import { SupplierRepository } from '~/domain/orders/repositories/supplier-repository';
import Failure from '~/lib/failure';
import createdPendingGiggedPaymentSchema from '~/requests/create-pending-gigged-payment';
import { GIGGED_USERNAME } from '.';

/**
 * Creates a bare payment record in the database with no order details nor payment url.
 */
export default class CreatePayment {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async verifyParams(): Promise<GiggedOrderHandshake> {
    const body = await this.request.json();

    return await createdPendingGiggedPaymentSchema.validateAsync({
      ...body,
      total: Number(body.total).toString(),
    });
  }

  async createPayment(supplier: SupplierEntity, order: GiggedOrderHandshake): Promise<OrderEntity> {
    try {
      const payment = await PaymentRepository.createPending(
        new GiggedMapper(order.gateway, order.hashkey).getPaymentFromHandshake(order, supplier),
        supplier,
      );

      if (!payment) {
        throw new Failure('cannot_process', 'Something unexpected occurred while creating pending payment.');
      }

      return payment;
    } catch (e) {
      console.log(e);
      throw new Failure('internal_error', 'Something unexpected occurred while creating pending payment.');
    }
  }

  async call(): Promise<OrderEntity> {
    try {
      const order = await this.verifyParams();
      const supplier = await SupplierRepository.findSupplierByUsername(GIGGED_USERNAME);

      if (!supplier) {
        throw new Failure('not_found', `There is no supplier with the username: ` + GIGGED_USERNAME);
      }

      return await this.createPayment(supplier, order);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
