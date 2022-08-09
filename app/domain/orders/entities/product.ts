import type { Product as ProductORM } from '@prisma/client';
import type { PaymentLinkDTO, PaymentLinkEntity } from './payment-link';

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

  constructor(product: Partial<ProductORM> & { paymentLinks: PaymentLinkEntity[] }) {
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
  }

  publishable() {
    return Boolean(
      !!this.name && typeof this.price !== 'undefined' && this.currency && this.coverImage && this.publicUrl,
    );
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
> & { paymentLinks: PaymentLinkDTO[] };
