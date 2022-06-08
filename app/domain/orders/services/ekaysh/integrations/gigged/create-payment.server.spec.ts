import { OrderStatus } from '@prisma/client';
import { mockGiggedOrderHandshake, mockSupplier } from 'mocks/fixtures';
import { beforeEach, expect, it } from 'vitest';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
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
});
