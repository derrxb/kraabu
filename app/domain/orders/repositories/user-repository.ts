import prisma from '~/infrastructure/database/index.server';
import { UserEntity } from '../entities/user';
import { EKyashRepository } from './ekyash-repository';

export class UserRepository {
  static async rebuildEntity(data: any) {
    if (!data || typeof data === 'undefined') {
      return undefined;
    }

    const ekyash = await EKyashRepository.rebuildEntity(data.ekyash);

    return new UserEntity({
      ...data,
      ekyashId: ekyash?.id ?? null,
      ekyash: ekyash,
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
