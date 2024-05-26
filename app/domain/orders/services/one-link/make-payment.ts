import { makeOneLinkPaymentSchema } from '~/presentation/requests/make-one-link-payment';
import { OrderEntity } from '../../entities/order';
import OrderRepository from '../../repositories/order-repository';
import Failure from '~/lib/failure';

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

  constructor(request: Request) {
    this.request = request;
    this.order = null;
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

    return order;
  }

  async call() {
    await this.verifyParams();
    await this.getPendingOrder();
  }
}
