import faker from '@faker-js/faker';
import { Currency, OrderStatus } from '@prisma/client';
import type { EKyashTransactionDTO } from '~/domain/orders/entities/ekyash-transaction';
import type { OrderDTO } from '~/domain/orders/entities/order';
import type { OrderItemDTO } from '~/domain/orders/entities/order-item';
import type { SupplierDTO } from '~/domain/orders/entities/supplier';

export const mockOrderItem: OrderItemDTO = {
  currency: Currency.BZD,
  description: faker.lorem.lines(2),
  name: 'Kawasaki Ninja 400 deep cleaning session',
  // convert to cents
  price: Number(faker.commerce.price(200, 250, 2)) * 100,
  quantity: 1,
  id: 1,
};

export const mockSupplier: SupplierDTO = {
  homepage: faker.internet.url(),
  id: 1,
  logoUrl: 'https://i.imgur.com/tfWgyRJ.png',
  name: faker.company.companyName(),
  tag: 'Riding big bikes in Belize should be easy!',
  username: faker.company.catchPhraseNoun(),
};

export const mockEKyashTransaction: EKyashTransactionDTO = {
  deepLinkUrl: 'N/A',
  id: 1,
  invoiceId: 'invoice-001',
  invoiceUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
  qrCodeUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
  orderId: 1,
  status: OrderStatus.Pending,
  transactionId: null,
};

export const mockOrder: OrderDTO = {
  currency: Currency.BZD,
  description: faker.commerce.productDescription(),
  invoice: faker.finance.bic(),
  orderItems: [mockOrderItem],
  status: OrderStatus.Pending,
  supplier: mockSupplier,
  createdAt: faker.date.recent(),
  amount: mockOrderItem.price,
  additionalData: {
    paymentKey: faker.finance.bic(),
    payer: {
      email: faker.internet.email(),
      name: faker.internet.userName(),
    },
  },
  ekyashTransaction: mockEKyashTransaction,
};
