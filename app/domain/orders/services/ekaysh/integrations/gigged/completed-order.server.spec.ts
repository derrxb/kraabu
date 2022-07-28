import { beforeEach, it } from 'vitest';
import type { CompletedPaymentCallbackData } from '~/domain/orders/library/ekyash-api';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
import {
  mockEkyashEntity,
  mockFailedGiggedEKyashOrderCallback,
  mockGiggedOrderHandshake,
  mockUserEntity,
} from '~/mocks/fixtures';
import { GIGGED_USERNAME } from '.';
import CompleteOrder from './complete-order.server';
import CreateOrder from './create-payment.server';

beforeEach(truncateDB);

it('Ensures that cancelled payments are correctly marked as cancelled', async () => {
  // Arrange
  const user = await prisma.user.create({
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

  await prisma.ekyash.create({
    data: {
      apiKey: mockEkyashEntity.apiKey,
      phone: mockEkyashEntity.phone,
      pinEncoded: mockEkyashEntity.pinEncoded,
      pinHash: mockEkyashEntity.pinHash,
      sid: mockEkyashEntity.sid,
      userId: user.id,
    },
  });

  // Create pending payment
  const payment = await new CreateOrder(
    new Request('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify(mockGiggedOrderHandshake),
    }),
  ).call();

  const cancelledPaymentRequest = new Request('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify({
      ...mockFailedGiggedEKyashOrderCallback,
      invoiceId: payment.invoice,
      orderId: payment.invoice,
    } as CompletedPaymentCallbackData),
  });

  // Act
  const cancelledPayment = await new CompleteOrder(cancelledPaymentRequest).call();

  // Assert
  console.log(cancelledPayment);
});
