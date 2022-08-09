import type { Params } from '@remix-run/react';
import Failure from '~/lib/failure';
import createProductPaymentLinkSchema from '~/presentation/requests/create-product-payment-link';
import type { UserEntity } from '../entities/user';
import { PaymentLinkRepository } from '../repositories/payment-link-repository';
import ProductRepository from '../repositories/product-repository';

/**
 * Creates a payment link for a product.
 */
export class CreateProductPaymentLink {
  private params: Params;
  private user: UserEntity;
  private productId?: string;

  constructor(params: Params, user: UserEntity) {
    this.params = params;
    this.user = user;
  }

  async verifyRequestData() {
    const { productId } = await createProductPaymentLinkSchema.validateAsync({
      productId: this.params.productId,
    });

    this.productId = productId;
  }

  async call() {
    await this.verifyRequestData();
    const product = await ProductRepository.getByPublicUrl(this.productId!);

    if (!product) {
      throw new Failure('not_found', 'Product not found');
    }

    if (!this.user.isProductOwner(product!)) {
      throw new Failure('forbidden', 'You do not have permission to create a payment link for this product.');
    }

    if (!product?.canCreatePaymentLink(this.user)) {
      throw new Failure(
        'cannot_process',
        `
          You cannot create a payment link for this product. Your product
          might be missing a few details, or you might not have the
          necessary permissions to create a payment link.
        `,
      );
    }

    const temporaryLink = product.generateTemporaryPaymentLink();
    const paymentLink = await PaymentLinkRepository.create({ url: temporaryLink }, product.id!);

    return paymentLink;
  }
}
