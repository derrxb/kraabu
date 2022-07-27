import type { Order, Product } from '@prisma/client';
import prisma from '~/infrastructure/database/index.server';
import { UserEntity } from '../entities/user';
import { EKyashRepository } from './ekyash-repository';
import OrderRepository from './order-repository';
import ProductRepository from './product-repository';

export class UserRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const ekyash = await EKyashRepository.rebuildEntity(data.ekyash);
    const products = data.products?.map((product: Product) =>  ProductRepository.rebuildEntity(product)) ?? [];
    const orders = data.orders?.map((order: Order) =>  OrderRepository.rebuildEntity(order)) ?? [];

    return new UserEntity({
      ...data,
      ekyashId: ekyash?.id ?? null,
      ekyash: ekyash,
      orders,
      products,
    });
  }

  static async findUserByUsername(username: string) {
    const result = await prisma.user.findFirst({
      where: { username: username },
      include: { ekyash: true },
    });

    return await this.rebuildEntity(result);
  }
}
