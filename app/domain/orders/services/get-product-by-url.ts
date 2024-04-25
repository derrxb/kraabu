import Failure from '~/lib/failure';
import getProductByUrlSchema from '~/presentation/requests/get-product-by-url';
import type { UserEntity } from '../entities/user';
import ProductRepository from '../repositories/product-repository';

export class GetProductByUrl {
  private url: string | null;
  private user: UserEntity | null;

  constructor(url: string, user: UserEntity | null = null) {
    this.url = url;
    this.user = user;
  }

  private async verifyParams() {
    await getProductByUrlSchema.validateAsync({
      url: this.url,
    });
  }

  async call() {
    await this.verifyParams();

    const product = await ProductRepository.findByUrl(this.url!);

    if (!product) {
      throw new Failure('not_found', 'Product not found');
    }

    if (!product.isPublished() && this.user?.isProductOwner(product)) {
      throw new Failure('forbidden', 'The product is not available for purchase');
    }

    return product;
  }
}
