import type { Ekyash } from '@prisma/client';
import { omit } from 'lodash';
import { beforeEach, it } from 'vitest';
import type { CompletedPaymentCallbackData } from '~/domain/orders/library/ekyash-api';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma from '~/infrastructure/database/index.server';
import {
  mockedFailedGiggedEKyashOrderCallback,
  mockedSupplierEkyashCredentials,
  mockGiggedOrderHandshake,
  mockSupplierEntity,
} from '~/mocks/fixtures';
import { GIGGED_USERNAME } from '.';
import CompletePayment from './complete-payment.server';
import CreatePayment from './create-payment.server';

beforeEach(truncateDB);

it('Ensures that cancelled payments are correctly marked as cancelled', async () => {
  // Arrange
  const supplier = await prisma.supplier.create({
    data: {
      ...omit(mockSupplierEntity.json(), ['id']),
      username: GIGGED_USERNAME,
    },
  });

  const ekyash = await prisma.ekyash.create({
    data: {
      ...(mockedSupplierEkyashCredentials as Ekyash),
      Supplier: {
        connect: {
          id: supplier.id,
        },
      },
    },
  });

  // Create pending payment
  const payment = await new CreatePayment(
    new Request('/', {
      method: 'POST',
      body: JSON.stringify(mockGiggedOrderHandshake),
    }),
  ).call();

  const cancelledPaymentRequest = new Request('/', {
    method: 'POST',
    body: JSON.stringify({
      ...mockedFailedGiggedEKyashOrderCallback,
      invoiceId: payment.invoice,
      orderId: payment.invoice,
    } as CompletedPaymentCallbackData),
  });

  // Act
  const cancelledPayment = await new CompletePayment(cancelledPaymentRequest).call();

  // Assert
  console.log(cancelledPayment);
});
