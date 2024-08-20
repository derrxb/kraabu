import { faker } from '@faker-js/faker';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import { MakePayment } from './make-payment';
import omit from 'lodash/omit';
import { beforeEach, describe, it, expect } from 'vitest';
import { mockUserEntity } from '~/mocks/fixtures';
import prisma, { OrderStatus } from '~/infrastructure/database/index.server';
import { GIGGED_USERNAME } from '../ekaysh/integrations/gigged';
import { nanoid } from 'nanoid';
import { UserRepository } from '../../repositories/user-repository';
import { NO_BALANCE_CREDIT_CARD, VALID_CREDIT_CARD } from '../../../../../test/credit-card';
import { OneLinkStatus } from '@prisma/client';

beforeEach(truncateDB);

describe('MakePayment to OneLink', async () => {
  it.only('Ensures an error is thrown when required `invoiceno` and `paykey` are missing', async () => {
    // Arrange
    const prismaUser = await prisma.user.create({
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

    const user = await UserRepository.rebuildEntity(prismaUser);
    const testRequestData = {
      email: faker.internet.email(),
      nameOnCard: faker.person.firstName(),
      cardNumber: '4242 4242 4242 4242',
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
    };

    const missingPayKeyRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify({
        ...testRequestData,
        invoiceno: 'test',
      }),
    });
    const missingInvoiceRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify({
        ...testRequestData,
        paymentKey: 'test',
      }),
    });

    // Act && Assert
    await expect(new MakePayment(missingInvoiceRequest, user!).call()).rejects.toThrowError(/invoiceNo/i);
    await expect(new MakePayment(missingPayKeyRequest, user!).call()).rejects.toThrowError(/paymentKey/i);
  });

  it("Ensures the user's credit card information is provided", async () => {
    // Arrange
    const prismaUser = await prisma.user.create({
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
    const user = await UserRepository.rebuildEntity(prismaUser);

    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: '4242 4242 4242 4242',
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
      invoiceno: 'test',
      paymentKey: 'test',
    };

    const missingEmailRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(omit(testRequestData, ['email'])),
    });
    const missingNameOnCardRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(omit(testRequestData, ['cardholderName'])),
    });
    const missingCardNumberRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(omit(testRequestData, ['cardNumber'])),
    });
    const missingExpiryDateRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(omit(testRequestData, ['expiryDate'])),
    });
    const missingCvcRequest = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(omit(testRequestData, ['cvc'])),
    });

    // Act && Assert
    await expect(new MakePayment(missingEmailRequest, user!).call()).rejects.toThrowError(/"email" is required/i);
    await expect(new MakePayment(missingNameOnCardRequest, user!).call()).rejects.toThrowError(
      /"cardholderName" is required/i,
    );
    await expect(new MakePayment(missingCardNumberRequest, user!).call()).rejects.toThrowError(
      /"cardNumber" is required/i,
    );
    await expect(new MakePayment(missingExpiryDateRequest, user!).call()).rejects.toThrowError(
      /"expiryDate" is required/i,
    );
    await expect(new MakePayment(missingCvcRequest, user!).call()).rejects.toThrowError(/"cvc" is required/i);
  });

  it('Ensures an error is thrown when no order matching the given invoice exists', async () => {
    // Arrange
    const prismaUser = await prisma.user.create({
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
    const user = await UserRepository.rebuildEntity(prismaUser);

    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: '4242 4242 4242 4242',
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
      invoiceno: 'test',
      paymentKey: 'test',
    };

    const requestWithInvalidInvoiceNo = new Request(
      'http://localhost:3000/orders/ekyash/integrations/gigged/one-link',
      {
        method: 'POST',
        body: JSON.stringify(testRequestData),
      },
    );

    // Act & Assert
    await expect(new MakePayment(requestWithInvalidInvoiceNo, user!).call()).rejects.toThrowError(
      /no order with the provided `invoiceNo` exists/i,
    );
  });

  it('Ensures only pending orders can be paid again', async () => {
    // Arrange
    // Create pending order
    const prismaUser = await prisma.user.create({
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
    const user = await UserRepository.rebuildEntity(prismaUser);

    const order = await prisma.order.create({
      data: {
        additionalData: {
          gateway: nanoid(),
          hashkey: nanoid(),
          paymentKey: nanoid(),
        },
        amount: Number(faker.finance.amount({ min: 10000, max: 100000, dec: 0 })) * 100,
        description: faker.lorem.lines(2),
        invoice: nanoid(),
        status: OrderStatus.Completed,
        userId: user?.id!,
      },
    });

    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: '4242 4242 4242 4242',
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
      invoiceno: order.invoice,
      paymentKey: (order.additionalData as any)?.paymentKey,
    };

    const requestPayingCompletedOrder = new Request(
      'http://localhost:3000/orders/ekyash/integrations/gigged/one-link',
      {
        method: 'POST',
        body: JSON.stringify(testRequestData),
      },
    );

    // Act & Assert
    await expect(new MakePayment(requestPayingCompletedOrder, user!).call()).rejects.toThrowError(
      /you cannot pay an order that has already been completed\./i,
    );
  });

  it('Ensures that only when the user has one-link setup can payment be made', async () => {
    // Arrange
    // create pending order
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

    const order = await prisma.order.create({
      data: {
        additionalData: {
          gateway: nanoid(),
          hashkey: nanoid(),
          paymentKey: nanoid(),
        },
        amount: Number(faker.finance.amount({ min: 10000, max: 100000, dec: 0 })) * 100,
        description: faker.lorem.lines(2),
        invoice: nanoid(),
        status: OrderStatus.Pending,
        userId: user.id,
      },
    });

    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: '4242 4242 4242 4242',
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
      invoiceno: order.invoice,
      paymentKey: (order.additionalData as any)?.paymentKey,
      oneLinkTransaction: {
        create: {},
      },
    };

    const requestPayingPendingOrder = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(testRequestData),
    });

    // Act & Assert
    await expect(
      new MakePayment(requestPayingPendingOrder, (await UserRepository.rebuildEntity(user)!) ?? null).call(),
    ).rejects.toThrowError(/OneLink payment has not been enabled for this seller\./i);
  });

  it('Ensures that when one-links API returns an error, the order payment fails', async () => {
    // Arrange
    // create pending order
    const user = await prisma.user.create({
      data: {
        businessName: mockUserEntity.businessName as string,
        username: GIGGED_USERNAME,
        password: 'test',
        email: mockUserEntity.email as string,
        logoUrl: mockUserEntity.logoUrl as string,
        tag: mockUserEntity.tag as string,
        website: mockUserEntity.website as string,
        oneLink: {
          create: {
            accessToken: nanoid(),
            phone: faker.phone.number(),
            salt: nanoid(),
          },
        },
      },
    });

    const order = await prisma.order.create({
      data: {
        additionalData: {
          gateway: nanoid(),
          hashkey: nanoid(),
          paymentKey: nanoid(),
        },
        amount: Number(faker.finance.amount({ min: 10000, max: 100000, dec: 0 })) * 100,
        description: faker.lorem.lines(2),
        invoice: nanoid(),
        status: OrderStatus.Pending,
        userId: user.id,
      },
    });

    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: NO_BALANCE_CREDIT_CARD,
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
      invoiceno: order.invoice,
      paymentKey: (order.additionalData as any)?.paymentKey,
      oneLinkTransaction: {
        create: {},
      },
    };

    const requestPayingPendingOrder = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(testRequestData),
    });

    // Act & Assert
    await expect(
      new MakePayment(requestPayingPendingOrder, (await UserRepository.rebuildEntity(user)!) ?? null).call(),
    ).rejects.toThrowError(/51: INSUFF FUNDS/i);
  });

  it('Ensures that orders are mark as paid once the one-link payment is accepted', async () => {
    // Arrange
    // create pending order
    const user = await prisma.user.create({
      data: {
        businessName: mockUserEntity.businessName as string,
        username: GIGGED_USERNAME,
        password: 'test',
        email: mockUserEntity.email as string,
        logoUrl: mockUserEntity.logoUrl as string,
        tag: mockUserEntity.tag as string,
        website: mockUserEntity.website as string,
        oneLink: {
          create: {
            accessToken: nanoid(),
            phone: faker.phone.number(),
            salt: nanoid(),
          },
        },
      },
    });

    const order = await prisma.order.create({
      data: {
        additionalData: {
          gateway: nanoid(),
          hashkey: nanoid(),
          paymentKey: nanoid(),
        },
        amount: Number(faker.finance.amount({ min: 10000, max: 100000, dec: 0 })) * 100,
        description: faker.lorem.lines(2),
        invoice: nanoid(),
        status: OrderStatus.Pending,
        userId: user.id,
        oneLinkTransaction: {
          create: {},
        },
      },
    });

    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: VALID_CREDIT_CARD,
      expiryDate: '10/26',
      cvc: faker.finance.creditCardCVV(),
      invoiceno: order.invoice,
      paymentKey: (order.additionalData as any)?.paymentKey,
    };

    const requestPayingPendingOrder = new Request('http://localhost:3000/orders/ekyash/integrations/gigged/one-link', {
      method: 'POST',
      body: JSON.stringify(testRequestData),
    });

    // Act
    const updatedOrder = await new MakePayment(
      requestPayingPendingOrder,
      (await UserRepository.rebuildEntity(user)!) ?? null,
    ).call();

    // Assert
    expect(updatedOrder?.status).toEqual(OrderStatus.Completed);
    expect(updatedOrder?.oneLinkTransaction?.status).toEqual(OneLinkStatus.Success);
  });
});
