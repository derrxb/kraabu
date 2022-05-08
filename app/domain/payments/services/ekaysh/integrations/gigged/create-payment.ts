import type { PaymentEntity } from "~/domain/payments/entities/payment";
import type { SupplierEntity } from "~/domain/payments/entities/supplier";
import type { GiggedOrderHandshake } from "~/domain/payments/library/gigged-api";
import GiggedMapper from "~/domain/payments/mappers/gigged-mapper";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";
import { SupplierRepository } from "~/domain/payments/repositories/supplier-repository";
import Failure from "~/lib/failure";
import createdPendingGiggedPaymentSchema from "~/requests/create-pending-gigged-payment";
import { GIGGED_USERNAME } from ".";

/**
 * Creates a bare payment record in the database with no order details nor payment url.
 */
export default class CreatePayment {
  private request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async verifyPaymentParams(): Promise<GiggedOrderHandshake> {
    const body = await this.request.json();

    return await createdPendingGiggedPaymentSchema.validateAsync({
      ...body,
      total: Number(body.total).toString(),
    });
  }

  async createPayment(supplier: SupplierEntity, order: GiggedOrderHandshake) {
    const pendingPayment = new GiggedMapper(
      order.gateway,
      order.hashkey
    ).getInitialPayment(order, supplier);

    return (await PaymentRepository.createPending(
      pendingPayment,
      supplier
    )) as PaymentEntity;
  }

  async call(): Promise<PaymentEntity> {
    const order = await this.verifyPaymentParams();

    const supplier = await SupplierRepository.findSupplierByUsername(
      GIGGED_USERNAME
    );

    if (!supplier) {
      throw new Failure(
        "not_found",
        `There is no supplier with the username: ` + GIGGED_USERNAME
      );
    }

    return await this.createPayment(supplier, order);
  }
}
