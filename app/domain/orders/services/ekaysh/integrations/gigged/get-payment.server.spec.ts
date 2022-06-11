import { beforeEach, expect, it } from 'vitest';
import type { GiggedOrderDetails } from '~/domain/orders/entities/order';
import { Currency } from '~/domain/orders/entities/order';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma, { OrderStatus } from '~/infrastructure/database/index.server';
import { mockEkyashEntity, mockGiggedOrderEntity, mockSupplierEntity } from '~/mocks/fixtures';
import GetPayment from './get-payment.server';

beforeEach(truncateDB);

it('Ensures an error is thrown when required `invoiceno` and `paykey` are missing', async () => {
  // Arrange
  const missingPayKey = new Request('http://localhost:3000?invoiceno=test-invoice', { method: 'GET' });
  const missingInvoice = new Request('http://localhost:3000?paykey=test-invoice', { method: 'GET' });

  // Act & Assert
  expect(async () => await new GetPayment(missingInvoice).call()).rejects.toThrowError(/invoiceNo/i);
  expect(async () => await new GetPayment(missingPayKey).call()).rejects.toThrowError(/paymentKey/i);
});

it('Ensures an error is thrown when no order matching the given invoice exists', async () => {
  // Arrange
  const request = new Request('http://localhost:3000?invoiceno=invalid&paykey=paykey');

  // Act & Assert
  expect(async () => await new GetPayment(request).call()).rejects.toThrowError(
    /no order with the provided `invoiceNo` exists/i,
  );
});

it("Ensures that an order's details is loaded correctly", async () => {
  // Arrange
  const ekyash = await prisma.ekyash.create({
    data: {
      apiKey: mockEkyashEntity.apiKey,
      phone: mockEkyashEntity.phone,
      pinEncoded: mockEkyashEntity.pinEncoded,
      pinHash: mockEkyashEntity.pinHash,
      sid: mockEkyashEntity.sid,
    },
  });

  const supplier = await prisma.supplier.create({
    data: {
      homepage: mockSupplierEntity.homepage,
      logoUrl: mockSupplierEntity.logoUrl,
      name: mockSupplierEntity.name,
      username: mockSupplierEntity.username,
      tag: mockSupplierEntity.tag,
      ekyashId: ekyash.id,
    },
  });

  const payment = await prisma.order.create({
    data: {
      amount: 10_000,
      currency: Currency.BZD,
      supplierId: supplier.id,
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
    `http://localhost:3000?invoiceno=${payment.invoice}&paykey=${mockGiggedOrderEntity.additionalData.paymentKey}`,
  );

  // Act
  const savedPayment = await new GetPayment(request).call();

  // Assert
  expect(savedPayment?.amount).toEqual(mockGiggedOrderEntity.amount);

  // Ensure the order item is loaded correctly.
  expect(savedPayment?.orderItems.length).toEqual(1);
  expect(savedPayment?.orderItems[0].name).toEqual(mockGiggedOrderEntity.orderItems[0].name);
  expect(savedPayment?.orderItems[0].description).toEqual(mockGiggedOrderEntity.orderItems[0].description);
  expect(savedPayment?.orderItems[0].price).toEqual(mockGiggedOrderEntity.orderItems[0].price);
  expect(savedPayment?.orderItems[0].quantity).toEqual(mockGiggedOrderEntity.orderItems[0].quantity);
});
