import Failure from '~/lib/failure';
import type { UserEntity } from '../entities/user';
import ProductRepository from '../repositories/product-repository';
import { UserRepository } from '../repositories/user-repository';

export class GetSupplierProducts {
  private username: string;
  private currentUser: UserEntity;
  private supplier?: UserEntity;
  private searchParams: URLSearchParams;

  constructor(username: string, currentUser: UserEntity, searchParams: URLSearchParams) {
    this.username = username;
    this.currentUser = currentUser;
    this.searchParams = searchParams;
  }

  async call() {
    this.supplier = await UserRepository.findUserByUsername(this.username);

    if (!this.supplier) {
      throw new Failure('not_found', `User with username '${this.username}' not found`);
    }

    if (this.supplier.isEqual(this.currentUser)) {
      const products = await ProductRepository.findAllProductsByUserId(this.supplier!.id!, {
        status: this.searchParams.get('status') ?? 'all',
      });
      return products;
    }

    const products = await ProductRepository.findAllProductsByUserId(this.supplier!.id!, {
      status: this.searchParams.get('status') ?? 'all',
    });
    return products;
  }
}
