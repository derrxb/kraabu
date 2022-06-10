import { beforeEach, expect, it } from 'vitest';
import { truncateDB } from '~/infrastructure/database/dev-test-clear-db';
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
