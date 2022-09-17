import Failure from '~/lib/failure';
import type { UserEntity } from '../entities/user';
import ProductRepository from '../repositories/product-repository';
import { UserRepository } from '../repositories/user-repository';

export class GetSupplierProducts {
  private username: string;
  private currentUser: UserEntity;
  private supplier?: UserEntity;

  constructor(username: string, currentUser: UserEntity) {
    this.username = username;
    this.currentUser = currentUser;
  }

  async call() {
    this.supplier = await UserRepository.findUserByUsername(this.username);

    if (!this.supplier) {
      throw new Failure('not_found', `User with username '${this.username}' not found`);
    }

    if (this.supplier.isEqual(this.currentUser)) {
      const products = await ProductRepository.findAllProductsByUserId(this.supplier!.id!);
      return products;
    }

    const products = await ProductRepository.findAllProductsByUserId(this.supplier!.id!);
    return products;
  }
}
