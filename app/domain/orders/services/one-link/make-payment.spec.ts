import { faker } from '@faker-js/faker';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
import { MakePayment } from './make-payment';
import omit from 'lodash/omit';
import { beforeEach, describe, it, expect } from 'vitest';

beforeEach(truncateDB);

describe('MakePayment to OneLink', async () => {
  it('Ensures an error is thrown when required `invoiceno` and `paykey` are missing', async () => {
    // Arrange
    const testRequestData = {
      email: faker.internet.email(),
      nameOnCard: faker.person.firstName(),
      cardNumber: faker.finance.creditCardNumber(),
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
    await expect(new MakePayment(missingInvoiceRequest).call()).rejects.toThrowError(/invoiceNo/i);
    await expect(new MakePayment(missingPayKeyRequest).call()).rejects.toThrowError(/paymentKey/i);
  });

  it("Ensures the user's credit card information is provided", async () => {
    // Arrange
    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: faker.finance.creditCardNumber(),
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
    await expect(new MakePayment(missingEmailRequest).call()).rejects.toThrowError(/"email" is required/i);
    await expect(new MakePayment(missingNameOnCardRequest).call()).rejects.toThrowError(
      /"cardholderName" is required/i,
    );
    await expect(new MakePayment(missingCardNumberRequest).call()).rejects.toThrowError(/"cardNumber" is required/i);
    await expect(new MakePayment(missingExpiryDateRequest).call()).rejects.toThrowError(/"expiryDate" is required/i);
    await expect(new MakePayment(missingCvcRequest).call()).rejects.toThrowError(/"cvc" is required/i);
  });

  it('Ensures an error is thrown when no order matching the given invoice exists', async () => {
    // Arrange
    const testRequestData = {
      email: faker.internet.email(),
      cardholderName: faker.person.firstName(),
      cardNumber: faker.finance.creditCardNumber(),
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
    expect(new MakePayment(requestWithInvalidInvoiceNo).call()).rejects.toThrowError(
      /no order with the provided `invoiceNo` exists/i,
    );
  });

  it.skip('Ensures only pending orders can be paid again');
  it.skip('Ensures that when one-links API returns an error, the order payment fails');
  it.skip('Ensures that orders are mark as paid once the one-link payment is accepted');
});
