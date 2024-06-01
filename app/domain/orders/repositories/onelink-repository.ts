import { OneLinkEntity } from '../entities/onelink';
import prisma from '~/infrastructure/database/index.server';

export class OneLinkRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    return new OneLinkEntity({
      accessToken: data?.accessToken,
      createdAt: data?.createdAt,
      id: data?.id,
      phone: data?.phone,
      salt: data?.salt,
      updatedAt: data?.updatedAt,
      userId: data?.userId,
    });
  }

  static async getByUserId(userId: number) {
    return this.rebuildEntity(
      await prisma.oneLink.findFirst({
        where: { userId: userId },
      }),
    );
  }
}
