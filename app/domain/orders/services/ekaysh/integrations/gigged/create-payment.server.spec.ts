import { OrderStatus } from '@prisma/client';
import { omit } from 'lodash';
import { beforeEach, expect, it } from 'vitest';
import type { GiggedOrderHandshake } from '~/domain/orders/library/gigged-api';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
import { mockGiggedOrderHandshake, mockSupplier } from '~/mocks/fixtures';
import { GIGGED_USERNAME } from '.';
import CreatePayment from './create-payment.server';

beforeEach(truncateDB);

it('Ensures that a gigged order fails to create when the GiggedBZ supplier is missing', async () => {
  // Arrange
  // create fake request
  const request = new Request('/', {
    method: 'POST',
    body: JSON.stringify(mockGiggedOrderHandshake),
  });

  // Act & Assert
  expect(async () => await new CreatePayment(request).call()).rejects.toThrowError(
    /There is no supplier with the username: giggedbz/i,
  );
});

it('Ensures that an order fails to create when at least the required params are missing', async () => {
  // Arrange
  const getIncompleteRequest = (omittedItem: keyof GiggedOrderHandshake) =>
    new Request('/', {
      method: 'POST',
      body: JSON.stringify(omit(mockGiggedOrderHandshake, [omittedItem])),
    });

  const currencyMissingRequest = getIncompleteRequest('currency');
  const invoiceMissingRequest = getIncompleteRequest('invoiceno');
  const totalMissingRequest = getIncompleteRequest('total');
  const hashkeyMissingRequest = getIncompleteRequest('hashkey');
  const gatewayMissingRequest = getIncompleteRequest('gateway');

  // Act & Assert
  expect(async () => await new CreatePayment(invoiceMissingRequest).call()).rejects.toThrowError(/invoiceno/i);
  expect(async () => await new CreatePayment(currencyMissingRequest).call()).rejects.toThrowError(/currency/i);
  expect(async () => await new CreatePayment(gatewayMissingRequest).call()).rejects.toThrowError(/gateway/i);
  expect(async () => await new CreatePayment(hashkeyMissingRequest).call()).rejects.toThrowError(/hashkey/i);
  expect(async () => await new CreatePayment(totalMissingRequest).call()).rejects.toThrowError(/total/i);
});

it('Ensures that the amount value is calculated correctly', async () => {
  // Arrange
  const INITIAL_AMOUNT = '100'; // BZ$100
  const EXPECTED_AMOUNT_IN_CENTS = Number(INITIAL_AMOUNT) * 100;

  const request = new Request('/', {
    method: 'POST',
    body: JSON.stringify({
      ...mockGiggedOrderHandshake,
      total: INITIAL_AMOUNT,
    } as GiggedOrderHandshake),
  });

  // Create fake gigged supplier
  await prisma.supplier.create({
    data: {
      ...mockSupplier,
      username: GIGGED_USERNAME,
    },
  });

  // Act
  const payment = await new CreatePayment(request).call();

  // Assert
  expect(payment.amount).toEqual(EXPECTED_AMOUNT_IN_CENTS);
});

it('Ensures that a payment is created with a pending status', async () => {
  // Arrange
  // create fake request
  const request = new Request('/', {
    method: 'POST',
    body: JSON.stringify(mockGiggedOrderHandshake),
  });

  // Create fake gigged supplier
  await prisma.supplier.create({
    data: {
      ...mockSupplier,
      username: GIGGED_USERNAME,
    },
  });

  // Act
  const payment = await new CreatePayment(request).call();

  // Assert
  expect(payment.status).toEqual(OrderStatus.Pending);
  expect(payment.amount).toEqual(Number(mockGiggedOrderHandshake.total) * 100);
  expect(payment.additionalData.paymentKey).toBeTruthy();
  expect(payment.invoice).toBeTruthy();
});
