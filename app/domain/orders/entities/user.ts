import type { User as UserORM } from '@prisma/client';
import type { EkyashDTO, EKyashEntity } from './ekyash';
import type { OrderDTO, OrderEntity } from './order';
import type { ProductDTO, ProductEntity } from './product';

export class UserEntity {
  id?: UserORM['id'];
  username?: UserORM['username'];
  email?: UserORM['email'];
  password?: UserORM['password'];
  createdAt?: UserORM['createdAt'];
  updatedAt?: UserORM['updatedAt'];
  logoUrl?: UserORM['logoUrl'];
  website?: UserORM['website'];
  tag?: UserORM['tag'];
  businessName?: UserORM['businessName'];
  ekyash?: EKyashEntity;
  products: ProductEntity[];
  orders: OrderEntity[];

  constructor(user: UserORM & { ekyash: EKyashEntity; products: ProductEntity[]; orders: OrderEntity[] }) {
    this.id = user.id;
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.logoUrl = user.logoUrl;
    this.website = user.website;
    this.tag = user.tag;
    this.businessName = user.businessName;
    this.products = user.products;
    this.orders = user.orders;
    this.products = user.products;
    this.orders = user.orders;
    this.ekyash = user.ekyash;
  }

  canUpsertProduct(product: ProductEntity) {
    return this.id === product.userId;
  }

  isProductOwner(product: ProductEntity) {
    return this.id === product.userId;
  }

  json(): UserDTO {
    return {
      businessName: this.businessName,
      createdAt: this.createdAt,
      email: this.email,
      id: this.id,
      logoUrl: this.logoUrl,
      tag: this.tag,
      username: this.username,
      website: this.website,
      products: this.products?.map((product) => product.json()) ?? [],
      orders: this.orders.map((order) => order.json()) ?? [],
      ekyash: this.ekyash?.json(),
    } as UserDTO;
  }
}

export type UserDTO = Pick<UserEntity, 'businessName' | 'email' | 'id' | 'logoUrl' | 'username' | 'tag' | 'website'> & {
  ekyash?: EkyashDTO;
  products: ProductDTO[];
  orders: OrderDTO[];
  createdAt?: string;
  updatedAt?: string;
};
