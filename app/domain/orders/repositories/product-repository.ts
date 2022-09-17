import type { PaymentLink } from '@prisma/client';
import prisma from '~/infrastructure/database/index.server';
import { ProductEntity } from '../entities/product';
import type { UserEntity } from '../entities/user';
import { PaymentLinkRepository } from '../repositories/payment-link-repository';
import { UserRepository } from './user-repository';
export default class ProductRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const paymentLinks = data.paymentLinks?.map((link: PaymentLink) => PaymentLinkRepository.rebuildEntity(link)) ?? [];
    const user = await UserRepository.rebuildEntity(data.user);

    return new ProductEntity({
      paymentLinks,
      id: data.id,
      name: data.name,
      description: data.description,
      price: data.price,
      currency: data.currency,
      coverImage: data.coverImage,
      thumbnailImage: data.thumbnailImage,
      published: data.published,
      publicUrl: data.publicUrl,
      userId: data.userId,
      user,
    });
  }

  static async create(data: ProductEntity, user: UserEntity) {
    const result = await prisma.product.create({
      data: {
        name: data.name as string,
        coverImage: data.coverImage as string,
        description: data.description as string,
        price: data.price ?? 0,
        publicUrl: data.publicUrl as string,
        thumbnailImage: data.thumbnailImage as string,
        currency: data.currency,
        published: false,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return this.rebuildEntity(result);
  }

  static async findAllProductsByUserId(userId: number) {
    const result = await prisma.product.findMany({
      where: {
        userId,
      },
      include: { paymentLinks: true },
    });

    const products = await Promise.all(result.map(async (product) => await this.rebuildEntity(product!)));

    return products as ProductEntity[];
  }

  static async findPublishedProductsByUserId(userId: number) {
    const result = await prisma.product.findMany({
      where: {
        userId,
        published: true,
      },
      include: { paymentLinks: true, user: true },
    });

    const products = await Promise.all(result.map(async (product) => await this.rebuildEntity(product!)));

    return products as ProductEntity[];
  }

  static async getByPublicUrl(publicUrl: string) {
    const result = await prisma.product.findFirst({
      where: {
        publicUrl,
      },
      include: { paymentLinks: true },
    });

    return this.rebuildEntity(result);
  }

  static async getByPaymentLink(paymentLink: string) {
    const result = await prisma.paymentLink.findFirst({
      where: { url: paymentLink },
      include: { product: { include: { user: true } } },
    });

    return await this.rebuildEntity(result?.product);
  }

  static async findById(id: number) {
    const result = await prisma.product.findFirst({
      where: {
        id,
      },
      include: { paymentLinks: true, user: true },
    });

    return this.rebuildEntity(result);
  }

  static async findByUrl(url: string) {
    const result = await prisma.product.findFirst({
      where: {
        publicUrl: url,
      },
      include: {
        user: true,
      },
    });

    return this.rebuildEntity(result);
  }
}
