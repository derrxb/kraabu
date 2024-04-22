import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';
import { beforeEach, describe, expect, it } from 'vitest';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedProductEntity, mockUserEntity } from '~/mocks/fixtures';
import { UserEntity } from '../entities/user';
import { CreateProductPaymentLink } from './create-product-payment-link';

beforeEach(truncateDB);

describe('[GET] Product', () => {
  it('Expect the `productId` to be provided', async () => {
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

    // Act & Assert
    expect(async () => new CreateProductPaymentLink({}, user).call()).rejects.toThrowError(
      /^"productId" is required$/i,
    );
  });

  it('Throws `not_found` when product does not exist', async () => {
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

    // Act & Assert
    expect(async () => new CreateProductPaymentLink({ productId: 'not-found' }, user).call()).rejects.toThrowError(
      /^product not found$/i,
    );
  });

  it('Throws `forbidden` when the user does not own the product', async () => {
    const nonOwner = await prisma.user.create({
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

    const nonOwnerEntity = new UserEntity(nonOwner as any);

    const owner = await prisma.user.create({
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

    // create a product linked to the owner user
    const product = await prisma.product.create({
      data: {
        coverImage: mockGiggedProductEntity.coverImage as string,
        description: mockGiggedProductEntity.description as string,
        name: mockGiggedProductEntity.name as string,
        price: mockGiggedProductEntity.price as number,
        publicUrl: nanoid(),
        thumbnailImage: mockGiggedProductEntity.thumbnailImage as string,
        user: {
          connect: {
            id: owner.id,
          },
        },
      },
    });

    // Act & Assert
    expect(async () =>
      new CreateProductPaymentLink({ productId: product.publicUrl.toString() }, nonOwnerEntity).call(),
    ).rejects.toThrowError(/^you do not have permission to create a payment link for this product.$/i);
  });

  it('Throws `cannot_process` when an unpublished account tries to create a payment link', async () => {
    // Arrange
    const owner = await prisma.user.create({
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

    const OwnerEntity = new UserEntity(owner as any);

    // create a product linked to the owner user
    const product = await prisma.product.create({
      data: {
        coverImage: mockGiggedProductEntity.coverImage as string,
        description: mockGiggedProductEntity.description as string,
        name: mockGiggedProductEntity.name as string,
        price: mockGiggedProductEntity.price as number,
        publicUrl: nanoid(),
        published: false,
        thumbnailImage: mockGiggedProductEntity.thumbnailImage as string,
        user: {
          connect: {
            id: owner.id,
          },
        },
      },
    });

    // Act & Assert
    expect(async () =>
      new CreateProductPaymentLink({ productId: product.publicUrl.toString() }, OwnerEntity).call(),
    ).rejects.toThrowError(/You cannot create a payment link for this product/i);
  });
});
