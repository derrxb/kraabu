import Failure from '~/lib/failure';
import getProductByUrlSchema from '~/presentation/requests/get-product-by-url';
import ProductRepository from '../repositories/product-repository';

export class GetProductByUrl {
  private url: string | null;

  constructor(url: string) {
    this.url = url;
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

    if (!product.isPublished()) {
      throw new Failure('forbidden', 'The product is not available for purchase');
    }

    return product;
  }
}
