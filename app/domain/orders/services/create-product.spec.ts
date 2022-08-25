import { nanoid } from 'nanoid';
import { beforeEach, expect, it } from 'vitest';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedProductEntity, mockUserEntity } from '~/mocks/fixtures';
import { UserEntity } from '../entities/user';
import { CreateProduct } from './create-product';

beforeEach(truncateDB);

it('Ensures that only cent values are supported for price', async () => {
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

  const product: { [key: string]: any } = {
    ...mockGiggedProductEntity,
    price: 100.1,
    userId: undefined,
    id: undefined,
  };

  const formData = new FormData();
  Object.keys(product)
    .filter((key) => product[key])
    .forEach((key) => formData.append(key, product[key]));

  // Act & Assert
  expect(async () => new CreateProduct(formData, user.json()).call()).rejects.toThrowError(
    /^price must be a cent value/i,
  );
});

it('Ensures that only `currencies` are supported', async () => {
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

  const product: { [key: string]: any } = {
    ...mockGiggedProductEntity,
    price: 100,
    userId: undefined,
    id: undefined,
    currency: 'NTD',
  };

  const formData = new FormData();
  Object.keys(product)
    .filter((key) => product[key])
    .forEach((key) => formData.append(key, product[key]));

  const request = new Request('http://localhost:3000?name=test', {
    method: 'POST',
    body: formData,
  });

  // Act & Assert
  expect(async () => new CreateProduct(await request.formData(), user.json()).call()).rejects.toThrowError(
    /^Currency should either be USD or BZD$/i,
  );
});
