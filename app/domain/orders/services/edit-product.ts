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
import editProductSchema from '~/presentation/requests/edit-product';

export class EditProduct {
  private formData;
  private user: UserDTO;
  private productId: number;

  constructor(formData: FormData, user: UserDTO, productId: number) {
    this.formData = formData;
    this.user = user;
    this.productId = productId;
  }

  async verifyFormData() {
    const formData = this.formData;
    const result = await editProductSchema.validateAsync(
      {
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        publicUrl: formData.get('publicUrl'),
        currency: formData.get('currency'),
        published: formData.get('published'),
      },
      { abortEarly: false },
    );

    return new ProductEntity({
      id: this.productId,
      paymentLinks: [],
      currency: new CurrencyValue(result.currency).call(),
      description: result.description,
      name: result.name,
      price: new PriceValue(result.price).call(),
      publicUrl: result.publicUrl ?? kebabCase(`${result.name.toLowerCase()}-${nanoid(3)}`),
      published: result.published === 'draft' ? false : true,
    });
  }

  async call() {
    const editProduct = await this.verifyFormData();
    const user = await UserRepository.findByUserId(this.user.id!);

    editProduct.user = user;

    if (!user!.canUpsertProduct(editProduct)) {
      throw new Failure('forbidden', "You can't create this product as it's not yours.");
    }

    return await ProductRepository.edit(editProduct);
  }
}
