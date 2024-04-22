import { nanoid } from 'nanoid';
import { beforeEach, expect, it } from 'vitest';
import type { GiggedOrderDetails } from '~/domain/orders/entities/order';
import { Currency } from '~/domain/orders/entities/order';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma, { OrderStatus } from '~/infrastructure/database/index.server';
import { mockEkyashEntity, mockGiggedOrderEntity, mockUserEntity } from '~/mocks/fixtures';
import GetOrder from './get-order.server';

beforeEach(truncateDB);

it('Ensures an error is thrown when required `invoiceno` and `paykey` are missing', async () => {
  // Arrange
  const missingPayKey = new Request('http://localhost:3000?invoiceno=test-invoice', { method: 'GET' });
  const missingInvoice = new Request('http://localhost:3000?paykey=test-invoice', { method: 'GET' });

  // Act & Assert
  expect(async () => await new GetOrder(missingInvoice).call()).rejects.toThrowError(/invoiceNo/i);
  expect(async () => await new GetOrder(missingPayKey).call()).rejects.toThrowError(/paymentKey/i);
});

it('Ensures an error is thrown when no order matching the given invoice exists', async () => {
  // Arrange
  const request = new Request('http://localhost:3000?invoiceno=invalid&paykey=paykey');

  // Act & Assert
  expect(async () => await new GetOrder(request).call()).rejects.toThrowError(
    /no order with the provided `invoiceNo` exists/i,
  );
});

it.only("Ensures that an order's details is loaded correctly", async () => {
  // Arrange
  const user = await prisma.user.create({
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

  const order = await prisma.order.create({
    data: {
      amount: 10_000,
      currency: Currency.BZD,
      userId: user.id,
      description: 'Test description',
      invoice: mockGiggedOrderEntity.invoice,
      status: OrderStatus.Pending,
      additionalData: {
        gateway: mockGiggedOrderEntity.additionalData.gateway,
        hashkey: mockGiggedOrderEntity.additionalData.hashkey,
        paymentKey: mockGiggedOrderEntity.additionalData.paymentKey,
        payer: mockGiggedOrderEntity.additionalData.payer,
      } as GiggedOrderDetails,
    },
  });

  const request = new Request(
    `http://localhost:3000?invoiceno=${order.invoice}&paykey=${mockGiggedOrderEntity.additionalData.paymentKey}`,
  );

  // Act
  const savedOrder = await new GetOrder(request).call();

  // Assert
  expect(savedOrder?.amount).toEqual(mockGiggedOrderEntity.amount);

  // Ensure the order item is loaded correctly.
  expect(savedOrder?.orderItems.length).toEqual(1);
  expect(savedOrder?.orderItems[0].name).toEqual(mockGiggedOrderEntity.orderItems[0].name);
  expect(savedOrder?.orderItems[0].description).toEqual(mockGiggedOrderEntity.orderItems[0].description);
  expect(savedOrder?.orderItems[0].price).toEqual(mockGiggedOrderEntity.orderItems[0].price);
  expect(savedOrder?.orderItems[0].quantity).toEqual(mockGiggedOrderEntity.orderItems[0].quantity);
});
