import { ProductEntity } from '~/entities/product';
import type { UserEntity } from '~/entities/user';
import Failure from '~/lib/failure';
import createProductSchema from '~/presentation/requests/create-product';
import ProductRepository from '~/repositories/product-repository';
import { CurrencyValue } from '~/values/currency';
import { PriceValue } from '~/values/price';

export class CreateProduct {
  private request: Request;
  private user: UserEntity;

  constructor(request: Request, user: UserEntity) {
    this.request = request;
    this.user = user;
  }

  async verifyFormData() {
    const formData = await this.request.formData();
    const result = await createProductSchema.validateAsync({
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      coverImage: formData.get('coverImage'),
      publicUrl: formData.get('publicUrl'),
    });

    return new ProductEntity({
      coverImage: result.coverImage,
      currency: new CurrencyValue(result.currency).call(),
      description: result.description,
      name: result.name,
      price: new PriceValue(result.price).call(),
      publicUrl: result.publicUrl,
    });
  }

  async call() {
    const newProduct = await this.verifyFormData();

    if (!this.user.canUpsertProduct(newProduct)) {
      throw new Failure('forbidden', "You can't create this product as it's not yours.");
    }

    return await ProductRepository.create(newProduct, this.user);
  }
}
