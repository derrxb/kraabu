import { OrderStatus } from '@prisma/client';
import omit from 'lodash/omit';
import { beforeEach, expect, it, afterEach } from 'vitest';
import type { GiggedOrderHandshake } from '~/domain/orders/library/gigged-api';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedOrderHandshake, mockUserEntity } from '~/mocks/fixtures';
import { GIGGED_USERNAME, PaymentMethod } from '.';
import CreateOrder from './create-order.server';
import { logger } from '~/infrastructure/logging/next.server';

beforeEach(truncateDB);

it('Ensures that a gigged order fails to create when the GiggedBZ supplier is missing', async () => {
  // Arrange
  // create fake request
  const request = new Request('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify(mockGiggedOrderHandshake),
  });

  // Act & Assert
  await expect(new CreateOrder(request, PaymentMethod.EKyash).call()).rejects.toThrowError(
    /There is no supplier with the username: giggedbz/i,
  );
});

it('Ensures that an order fails to create when at least the required params are missing', async () => {
  // Arrange
  const getIncompleteRequest = (omittedItem: keyof GiggedOrderHandshake) =>
    new Request('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify(omit(mockGiggedOrderHandshake, [omittedItem])),
    });

  const currencyMissingRequest = getIncompleteRequest('currency');
  const invoiceMissingRequest = getIncompleteRequest('invoiceno');
  const totalMissingRequest = getIncompleteRequest('total');
  const hashkeyMissingRequest = getIncompleteRequest('hashkey');
  const gatewayMissingRequest = getIncompleteRequest('gateway');

  // Act & Assert
  await expect(new CreateOrder(invoiceMissingRequest, PaymentMethod.EKyash).call()).rejects.toThrowError(/invoiceno/i);
  await expect(new CreateOrder(currencyMissingRequest, PaymentMethod.EKyash).call()).rejects.toThrowError(/currency/i);
  await expect(new CreateOrder(gatewayMissingRequest, PaymentMethod.EKyash).call()).rejects.toThrowError(/gateway/i);
  await expect(new CreateOrder(hashkeyMissingRequest, PaymentMethod.EKyash).call()).rejects.toThrowError(/hashkey/i);
  await expect(new CreateOrder(totalMissingRequest, PaymentMethod.EKyash).call()).rejects.toThrowError(/total/i);
});

it('Ensures that the amount value is calculated correctly', async () => {
  // Arrange
  const INITIAL_AMOUNT = '100'; // BZ$100
  const EXPECTED_AMOUNT_IN_CENTS = Number(INITIAL_AMOUNT) * 100;

  const request = new Request('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify({
      ...mockGiggedOrderHandshake,
      total: INITIAL_AMOUNT,
    } as GiggedOrderHandshake),
  });

  await prisma.user.create({
    data: {
      businessName: mockUserEntity.businessName as string,
      username: GIGGED_USERNAME,
      password: 'test',
      email: mockUserEntity.email as string,
      logoUrl: mockUserEntity.logoUrl as string,
      tag: mockUserEntity.tag as string,
      website: mockUserEntity.website as string,
    },
  });

  // Act
  const order = await new CreateOrder(request, PaymentMethod.EKyash).call();

  // Assert
  expect(order.amount).toEqual(EXPECTED_AMOUNT_IN_CENTS);
});

it('Ensures that a order is created with a pending status', async () => {
  // Arrange
  // create fake request
  const request = new Request('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify(mockGiggedOrderHandshake),
  });

  await prisma.user.create({
    data: {
      businessName: mockUserEntity.businessName as string,
      username: GIGGED_USERNAME,
      password: 'test',
      email: mockUserEntity.email as string,
      logoUrl: mockUserEntity.logoUrl as string,
      tag: mockUserEntity.tag as string,
      website: mockUserEntity.website as string,
    },
  });

  // Act
  const order = await new CreateOrder(request, PaymentMethod.EKyash).call();

  // Assert
  expect(order.status).toEqual(OrderStatus.Pending);
  expect(order.amount).toEqual(Number(mockGiggedOrderHandshake.total) * 100);
  expect(order.additionalData.paymentKey).toBeTruthy();
  expect(order.invoice).toBeTruthy();
});
