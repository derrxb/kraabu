import { makeOneLinkPaymentSchema } from '~/presentation/requests/make-one-link-payment';
import { OrderEntity } from '../../entities/order';
import OrderRepository from '../../repositories/order-repository';
import { OneLinkRepository } from '../../repositories/onelink-repository';
import Failure from '~/lib/failure';
import { OrderStatus } from '@prisma/client';
import { OneLinkMapper } from '../../mappers/onelink-mapper';
import { UserEntity } from '../../entities/user';
import { OneLinkEntity } from '../../entities/onelink';

type MakePaymentRequiredData = {
  invoiceno: string;
  paymentKey: string;
  email: string;
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
};

export class MakePayment {
  private request: Request;
  private order: OrderEntity | null;
  private details: MakePaymentRequiredData | null;
  private user: UserEntity | null;
  private oneLink: OneLinkEntity | null;

  constructor(request: Request, user: UserEntity | null) {
    this.request = request;
    this.order = null;
    this.details = null;
    this.user = user;
    this.oneLink = null;
  }

  async verifyParams() {
    const body = await this.request.json();

    const { invoiceno, paymentKey, email, cardholderName, cardNumber, expiryDate, cvc } =
      await makeOneLinkPaymentSchema.validateAsync({
        invoiceno: body['invoiceno'],
        paymentKey: body['paymentKey'],
        email: body['email'],
        cardholderName: body['cardholderName'],
        cardNumber: body['cardNumber'],
        expiryDate: body['expiryDate'],
        cvc: body['cvc'],
      });

    this.details = {
      invoiceno,
      paymentKey,
      email,
      cardholderName,
      cardNumber,
      expiryDate,
      cvc,
    };
  }

  async getPendingOrder() {
    const order = await OrderRepository.getByInvoice(this.details?.invoiceno!);

    if (!order) {
      throw new Failure('not_found', 'No order with the provided `invoiceNo` exists.');
    }

    if (order.status !== OrderStatus.Pending) {
      throw new Failure('bad_request', 'You cannot pay an order that has already been completed.');
    }

    this.order = order;
  }

  async setOneLink() {
    const oneLink = await OneLinkRepository.getByUserId(this.user?.id!);

    if (!oneLink) {
      throw new Failure('bad_request', 'OneLink payment has not been enabled for this seller.');
    }

    this.oneLink = oneLink;
  }

  async makePayment() {
    const result = await new OneLinkMapper(this.oneLink!).createRequest(this.order!, {
      cardNumber: this.details?.cardNumber!,
      ccv: this.details?.cvc!,
      expirationDate: this.details?.expiryDate!,
      nameOnCard: this.details?.cardholderName!,
    });

    return result;
  }

  async call() {
    await this.verifyParams();
    await this.getPendingOrder();
    await this.setOneLink();

    try {
      const result = await this.makePayment();
      const order = await OrderRepository.markOneLinkPaymentAsCompleted(this.order!);
      return order;
    } catch (error) {
      await OrderRepository.markOneLinkPaymentAsRejected(this.order!);
      throw error;
    }
  }
}
