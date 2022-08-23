import faker from '@faker-js/faker';
import type { Product } from '@prisma/client';
import { nanoid } from 'nanoid';
import { describe, expect, it } from 'vitest';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedProductEntity, mockUserEntity } from '~/mocks/fixtures';
import { PaymentLinkStatus } from '../entities/payment-link';
import { UserEntity } from '../entities/user';
import { GetOrderablePaymentLink } from './get-product-by-payment-link';

describe('', () => {
  it('Returns `not_found` when payment link is missing', async () => {
    // Arrange
    const invalidId = 'invalid-id';

    // Act & Assert
    expect(async () => await new GetOrderablePaymentLink(invalidId).call());
  });

  it('Returns `forbidden` when payment link is invalid', async () => {
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
      },
    });

    const expiredPaymentLink = await prisma.paymentLink.create({
      data: {
        url: nanoid(),
        productId: Number(product.id),
        status: PaymentLinkStatus.Expired,
      },
    });

    const completedPaymentLink = await prisma.paymentLink.create({
      data: {
        url: nanoid(),
        productId: Number(product.id),
        status: PaymentLinkStatus.Completed,
      },
    });

    // Act & Assert
    expect(async () => await new GetOrderablePaymentLink(expiredPaymentLink.url).call()).rejects.toThrowError(
      /expired or is already used/i,
    );
    expect(async () => await new GetOrderablePaymentLink(completedPaymentLink.url).call()).rejects.toThrowError(
      /expired or is already used/i,
    );
  });

  it('Returns `ok` & the product when payment link is valid', async () => {
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

    const validPaymentLink = await prisma.paymentLink.create({
      data: {
        url: nanoid(),
        productId: Number(product.id),
        status: 'Pending',
      },
    });

    // Act
    const orderablePaymentLink = await new GetOrderablePaymentLink(validPaymentLink.url).call();

    // Assert
    expect(orderablePaymentLink.id).toEqual(validPaymentLink.productId);
  });
});
