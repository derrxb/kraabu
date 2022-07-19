import type { User as UserORM } from '@prisma/client';
import type { EKyashEntity, EkyashDTO } from './ekyash';
import type { OrderDTO, OrderEntity } from './order';
import type { ProductDTO, ProductEntity } from './product';

export class UserEntity {
  id?: UserORM['id'];
  username?: UserORM['username'];
  email?: UserORM['email'];
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

  canViewEkyash(userId?: number) {
    return userId === this.id;
  }

  json(userId?: number) {
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
      ekyash: this.canViewEkyash(userId) ? this.ekyash?.json() : undefined,
    } as UserDTO;
  }
}

export type UserDTO = Pick<
  UserEntity,
  'businessName' | 'createdAt' | 'email' | 'id' | 'logoUrl' | 'updatedAt' | 'username' | 'tag' | 'website'
> & { ekyash?: EkyashDTO; products: ProductDTO[]; orders: OrderDTO[] };
