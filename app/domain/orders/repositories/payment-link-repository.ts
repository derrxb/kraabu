import prisma from '~/infrastructure/database/index.server';
import { PaymentLinkEntity } from '../entities/payment-link';

export class PaymentLinkRepository {
  static rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new PaymentLinkEntity({
      id: data.id,
      url: data.url,
      productId: data.productId,
    });
  }

  static async create(data: Pick<PaymentLinkEntity, 'url'>, productId: number) {
    const result = await prisma.paymentLink.create({
      data: {
        url: data.url,
        productId: productId,
      },
    });

    return this.rebuildEntity(result);
  }
}
