import type { PaymentLink } from '@prisma/client';
import prisma from '~/infrastructure/database/index.server';
import { ProductEntity } from '../entities/product';
import type { UserEntity } from '../entities/user';
import { PaymentLinkRepository } from '../repositories/payment-link-repository';
export default class ProductRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const paymentLinks = data.paymentLinks?.map((link: PaymentLink) => PaymentLinkRepository.rebuildEntity(link)) ?? [];

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
        userId: user.id as number,
        published: false,
      },
    });

    return this.rebuildEntity(result);
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
}
