import { nanoid } from 'nanoid';
import { beforeEach, expect, it, describe } from 'vitest';
import type { GiggedOrderDetails } from '~/domain/orders/entities/order';
import { Currency } from '~/domain/orders/entities/order';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma, { OrderStatus } from '~/infrastructure/database/index.server';
import { mockEkyashEntity, mockGiggedOrderEntity, mockOrderItemEntity, mockUserEntity } from '~/mocks/fixtures';
import GetOneLinkOrder from './get-one-link-order.server';

beforeEach(truncateDB);

describe('GetOneLinkOrder', () => {
  it('Ensures an error is thrown when required `invoiceno` and `paykey` are missing', async () => {
    // Arrange
    const missingPayKey = new Request('http://localhost:3000?invoiceno=test-invoice', { method: 'GET' });
    const missingInvoice = new Request('http://localhost:3000?paykey=test-invoice', { method: 'GET' });

    // Act & Assert
    await expect(new GetOneLinkOrder(missingInvoice).call()).rejects.toThrowError(/invoiceNo/i);
    await expect(new GetOneLinkOrder(missingPayKey).call()).rejects.toThrowError(/paymentKey/i);
  });

  it('Ensures an error is thrown when no order matching the given invoice exists', async () => {
    // Arrange
    const request = new Request('http://localhost:3000?invoiceno=invalid&paykey=paykey');

    // Act & Assert
    await expect(new GetOneLinkOrder(request).call()).rejects.toThrowError(
      /no order with the provided `invoiceNo` exists/i,
    );
  });

  it("Ensures that an order's details is loaded correctly", async () => {
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
        invoice: nanoid(),
        status: OrderStatus.Pending,
        additionalData: {
          gateway: mockGiggedOrderEntity.additionalData.gateway,
          hashkey: mockGiggedOrderEntity.additionalData.hashkey,
          paymentKey: nanoid(),
          payer: mockGiggedOrderEntity.additionalData.payer,
        } as GiggedOrderDetails,
      },
      include: {
        orderItems: true,
      },
    });

    const orderItems = await prisma.orderItem.create({
      data: {
        name: mockOrderItemEntity.name,
        description: mockOrderItemEntity.description,
        price: mockOrderItemEntity.price,
        quantity: mockOrderItemEntity.quantity,
        currency: mockOrderItemEntity.currency,
        orderId: order.id,
      },
    });

    const updatedOrder = await prisma.order.findFirst({
      where: {
        id: order.id,
      },
      include: {
        orderItems: true,
      },
    });

    const request = new Request(
      `http://localhost:3000?invoiceno=${updatedOrder?.invoice}&paykey=${(updatedOrder?.additionalData as any)?.paymentKey}`,
    );

    // Act
    const savedOrder = await new GetOneLinkOrder(request).call();

    // Assert
    expect(savedOrder?.amount).toEqual(mockGiggedOrderEntity.amount);

    // Ensure the order item is loaded correctly.
    expect(savedOrder?.orderItems.length).toEqual(1);
    expect(savedOrder?.orderItems[0].name).toEqual(orderItems.name);
    expect(savedOrder?.orderItems[0].description).toEqual(orderItems.description);
    expect(savedOrder?.orderItems[0].price).toEqual(orderItems.price);
    expect(savedOrder?.orderItems[0].quantity).toEqual(orderItems.quantity);
  });

  it("Ensures that an order's details can be loaded twice", async () => {
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
        invoice: nanoid(),
        status: OrderStatus.Pending,
        additionalData: {
          gateway: mockGiggedOrderEntity.additionalData.gateway,
          hashkey: mockGiggedOrderEntity.additionalData.hashkey,
          paymentKey: nanoid(),
          payer: mockGiggedOrderEntity.additionalData.payer,
        } as GiggedOrderDetails,
      },
      include: {
        orderItems: true,
      },
    });

    const orderItems = await prisma.orderItem.create({
      data: {
        name: mockOrderItemEntity.name,
        description: mockOrderItemEntity.description,
        price: mockOrderItemEntity.price,
        quantity: mockOrderItemEntity.quantity,
        currency: mockOrderItemEntity.currency,
        orderId: order.id,
      },
    });

    const updatedOrder = await prisma.order.findFirst({
      where: {
        id: order.id,
      },
      include: {
        orderItems: true,
      },
    });

    const request = new Request(
      `http://localhost:3000?invoiceno=${updatedOrder?.invoice}&paykey=${(updatedOrder?.additionalData as any)?.paymentKey}`,
    );

    // Act
    const savedOrder = await new GetOneLinkOrder(request).call();

    // Assert
    expect(savedOrder?.amount).toEqual(mockGiggedOrderEntity.amount);

    // Ensure the order item is loaded correctly.
    expect(savedOrder?.orderItems.length).toEqual(1);
    expect(savedOrder?.orderItems[0].name).toEqual(orderItems.name);
    expect(savedOrder?.orderItems[0].description).toEqual(orderItems.description);
    expect(savedOrder?.orderItems[0].price).toEqual(orderItems.price);
    expect(savedOrder?.orderItems[0].quantity).toEqual(orderItems.quantity);
  });
});
