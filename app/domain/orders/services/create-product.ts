import kebabCase from 'lodash/kebabCase';
import { nanoid } from 'nanoid';
import { ProductEntity } from '~/entities/product';
import type { UserDTO } from '~/entities/user';
import Failure from '~/lib/failure';
import createProductSchema from '~/presentation/requests/create-product';
import ProductRepository from '~/repositories/product-repository';
import { CurrencyValue } from '~/values/currency';
import { PriceValue } from '~/values/price';
import { UserRepository } from '../repositories/user-repository';

export class CreateProduct {
  private formData;
  private user: UserDTO;

  constructor(formData: FormData, user: UserDTO) {
    this.formData = formData;
    this.user = user;
  }

  async verifyFormData() {
    const formData = this.formData;
    const result = await createProductSchema.validateAsync(
      {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        coverImage: formData.get('coverImage'),
        publicUrl: formData.get('publicUrl'),
        currency: formData.get('currency'),
        thumbnailImage: formData.get('thumbnailImage'),
      },
      { abortEarly: false },
    );

    return new ProductEntity({
      paymentLinks: [],
      coverImage: result.coverImage,
      currency: new CurrencyValue(result.currency).call(),
      description: result.description,
      name: result.name,
      price: new PriceValue(result.price).call(),
      publicUrl: result.publicUrl ?? kebabCase(`${result.name.toLowerCase()}-${nanoid(3)}`),
      thumbnailImage: result.thumbnailImage,
    });
  }

  async call() {
    const newProduct = await this.verifyFormData();
    const user = await UserRepository.findByUserId(this.user.id!);

    newProduct.user = user;

    if (!user!.canUpsertProduct(newProduct)) {
      throw new Failure('forbidden', "You can't create this product as it's not yours.");
    }

    return await ProductRepository.create(newProduct, user!);
  }
}
