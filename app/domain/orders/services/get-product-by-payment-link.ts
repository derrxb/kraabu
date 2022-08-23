import Failure from '~/lib/failure';
import getOrderablePaymentLinkSchema from '~/presentation/requests/get-orderable-payment-link';
import { PaymentLinkRepository } from '../repositories/payment-link-repository';
import ProductRepository from '../repositories/product-repository';

export class GetOrderablePaymentLink {
  private paymentLink: string | null;

  constructor(paymentLink: string) {
    this.paymentLink = paymentLink;
  }

  private async verifyParams() {
    await getOrderablePaymentLinkSchema.validateAsync({
      paymentLink: this.paymentLink,
    });
  }

  async call() {
    await this.verifyParams();

    const paymentLink = await PaymentLinkRepository.findByUrl(this.paymentLink!);

    if (!paymentLink) {
      throw new Failure('not_found', 'Payment link not found');
    }

    if (!paymentLink.isOrderable()) {
      throw new Failure('forbidden', `The given payment link has expired or is already used`);
    }

    const product = await ProductRepository.getByPaymentLink(this.paymentLink!);

    if (!product) {
      throw new Failure('not_found', 'No product found with that payment link');
    }

    return product;
  }
}
