import { faker } from '@faker-js/faker';
import { nanoid } from 'nanoid';
import { describe, expect, it } from 'vitest';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedProductEntity, mockUserEntity } from '~/mocks/fixtures';
import { UserEntity } from '../entities/user';
import { GetSupplierProducts } from './get-supplier-products';

describe('GET Supplier Products', () => {
  it('Returns `not_found` when there is no user with the given username', async () => {
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
    const invalidUsername = 'invalid-username';

    // Act & Assert
    expect(async () => await new GetSupplierProducts(invalidUsername, user).call()).rejects.toThrowError(
      "User with username 'invalid-username' not found",
    );
  });

  it.skip('Returns only `published` products when the current user is not the owner', async () => {
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
    const currentUser = new UserEntity(userModel as any);

    const supplierModel = await prisma.user.create({
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
    const supplier = new UserEntity(userModel as any);

    await prisma.product.create({
      data: {
        name: mockGiggedProductEntity.name as string,
        id: undefined,
        description: mockGiggedProductEntity.description as string,
        paymentLinks: undefined,
        publicUrl: nanoid(),
        userId: Number(supplierModel.id),
        user: undefined,
        price: Number(1),
        coverImage: 'blah',
        thumbnailImage: 'blah',
        published: true,
      },
    });

    await prisma.product.create({
      data: {
        name: mockGiggedProductEntity.name as string,
        id: undefined,
        description: mockGiggedProductEntity.description as string,
        paymentLinks: undefined,
        publicUrl: nanoid(),
        userId: Number(supplierModel.id),
        user: undefined,
        price: Number(1),
        coverImage: 'blah',
        thumbnailImage: 'blah',
        published: false,
      },
    });

    // Act
    const result = await new GetSupplierProducts(supplier.username!, currentUser).call();

    // Assert
    expect(result.length).toEqual(1);
  });
});
