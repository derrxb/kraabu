import type { Product as ProductORM } from '@prisma/client';
import { nanoid } from 'nanoid';
import type { PaymentLinkDTO, PaymentLinkEntity } from './payment-link';
import type { UserDTO, UserEntity } from './user';

export class ProductEntity {
  id?: ProductORM['id'];
  name?: ProductORM['name'];
  description?: ProductORM['description'];
  price?: ProductORM['price'];
  currency?: ProductORM['currency'];
  coverImage?: ProductORM['coverImage'];
  thumbnailImage?: ProductORM['thumbnailImage'];
  published?: ProductORM['published'];
  publicUrl?: ProductORM['publicUrl'];
  userId?: ProductORM['userId'];
  paymentLinks?: PaymentLinkEntity[];
  user?: UserEntity;

  constructor(product: Partial<ProductORM> & { paymentLinks: PaymentLinkEntity[]; user?: UserEntity }) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.currency = product.currency;
    this.coverImage = product.coverImage;
    this.thumbnailImage = product.thumbnailImage;
    this.published = product.published;
    this.publicUrl = product.publicUrl;
    this.userId = product.userId;
    this.paymentLinks = product.paymentLinks;
    this.user = product.user;
  }

  publishable() {
    return Boolean(
      !!this.name && typeof this.price !== 'undefined' && this.currency && this.coverImage && this.publicUrl,
    );
  }

  isPublished() {
    return this.published;
  }

  /**
   * Only products with the all required details can create a payment link.
   */
  canCreatePaymentLink(user: UserEntity) {
    return this.publishable() && !!this.published;
  }

  /**
   * Create a temporary payment link for this product.
   */
  generateTemporaryPaymentLink() {
    return `${this.publicUrl}-${nanoid(3)}`;
  }

  json() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      currency: this.currency,
      coverImage: this.coverImage,
      thumbnailImage: this.thumbnailImage,
      published: this.published,
      publicUrl: this.publicUrl,
      userId: this.userId,
      paymentLinks: this.paymentLinks?.map((paymentLink) => paymentLink.json()) ?? [],
      user: this.user?.json(),
    } as ProductDTO;
  }
}

export type ProductDTO = Pick<
  ProductEntity,
  | 'coverImage'
  | 'currency'
  | 'description'
  | 'id'
  | 'name'
  | 'price'
  | 'publicUrl'
  | 'published'
  | 'thumbnailImage'
  | 'userId'
> & { paymentLinks: PaymentLinkDTO[]; user?: UserDTO };
