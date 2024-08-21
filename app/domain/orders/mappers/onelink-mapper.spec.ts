import { nanoid } from 'nanoid';
import { beforeEach, describe, expect, it } from 'vitest';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import prisma, { Currency } from '~/infrastructure/database/index.server';
import { mockGiggedOrderEntity, mockOneLinkEntity, mockOrderItemEntity, mockUserEntity } from '~/mocks/fixtures';
import { GiggedOrderDetails, OrderStatus } from '../entities/order';
import OrderRepository from '../repositories/order-repository';
import { GIGGED_USERNAME } from '../services/ekaysh/integrations/gigged';
import { OneLinkAmountValue } from '../values/onelink-amount';

beforeEach(truncateDB);

describe('OneLink Mapper', () => {
  it('Ensures the values are converted correctly on requests to onelink', async () => {
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

    await prisma.oneLink.create({
      data: {
        accessToken: mockOneLinkEntity.accessToken,
        phone: mockOneLinkEntity.phone,
        salt: mockOneLinkEntity.salt,
        createdAt: mockOneLinkEntity.createdAt,
        updatedAt: mockOneLinkEntity.updatedAt,
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

    order.orderItems = [orderItems];
    await OrderRepository.rebuildEntity(order);

    // Act & Assert
    expect(new OneLinkAmountValue(order.amount, order.currency).toJSON()).toEqual(10_000 / 100);
  });

  it('Ensures that BZD cents are considered correctly BZD dollars', async () => {
    // Arrange
    const currency = Currency.BZD;
    const fullAmount = 125.5; // bzd
    const amount = fullAmount * 100; // 125.50 in cents

    // Act & Assert
    expect(new OneLinkAmountValue(amount, currency).toJSON()).toEqual(fullAmount);
  });

  it('Ensures that USD cents are converted correctly to BZD dollars', async () => {
    // Arrange
    const currency = Currency.USD;
    const fullAmount = 125.5;
    const amount = fullAmount * 100; // 125.50 in cents
    const expectAmount = fullAmount * 2; // usd to bzd is 2-1

    // Act & Assert
    expect(new OneLinkAmountValue(amount, currency).toJSON()).toEqual(expectAmount);
  });
});
