import faker from '@faker-js/faker';
import type { Product } from '@prisma/client';
import { nanoid } from 'nanoid';
import { describe, expect, it } from 'vitest';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedProductEntity, mockUserEntity } from '~/mocks/fixtures';
import { UserEntity } from '../entities/user';
import { GetProductByUrl } from './get-product-by-url';

describe('', () => {
  it('Returns `not_found` when product does not exist', async () => {
    // Arrange
    const invalidId = 'invalid-id';

    // Act & Assert
    expect(async () => await new GetProductByUrl(invalidId).call());
  });

  it('Returns `forbidden` when payment link is not published', async () => {
    // Arrange
    const userModel = await prisma.user.create({
      data: {
        businessName: mockUserEntity.businessName as string,
        username: nanoid(),
        password: 'test',
        email: mockUserEntity.email as string,
        logoUrl: mockUserEntity.logoUrl as string,
        tag: mockUserEntity.tag as string,
        website: mockUserEntity.website as string,
      },
    });
    const user = new UserEntity(userModel as any);

    const product = await prisma.product.create({
      data: {
        ...(mockGiggedProductEntity as Product),
        id: undefined,
        userId: Number(user.id),
        paymentLinks: undefined,
        publicUrl: nanoid(),
        published: false,
      },
    });

    // Act & Assert
    expect(async () => await new GetProductByUrl(product.publicUrl).call()).rejects.toThrowError(
      /product is not available for purchase/i,
    );
  });

  it('Returns `ok` & the product when the publicUrl is valid', async () => {
    // Arrange
    const userModel = await prisma.user.create({
      data: {
        businessName: mockUserEntity.businessName as string,
        username: nanoid(),
        password: 'test',
        email: faker.internet.email(),
        logoUrl: mockUserEntity.logoUrl as string,
        tag: mockUserEntity.tag as string,
        website: mockUserEntity.website as string,
      },
    });
    const user = new UserEntity(userModel as any);

    const product = await prisma.product.create({
      data: {
        ...(mockGiggedProductEntity as Product),
        id: undefined,
        userId: Number(user.id),
        paymentLinks: undefined,
        publicUrl: nanoid(),
      },
    });

    // Act
    const orderablePaymentLink = await new GetProductByUrl(product.publicUrl).call();

    // Assert
    expect(orderablePaymentLink.publicUrl).toEqual(product.publicUrl);
  });
});
