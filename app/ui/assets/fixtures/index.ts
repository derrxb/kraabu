import faker from '@faker-js/faker';
import { Currency, OrderStatus } from '@prisma/client';
import type { OrderItemDTO } from '~/domain/orders/entities/order-item';
import type { OrderDTO } from '~/domain/orders/entities/payment';
import type { SupplierDTO } from '~/domain/orders/entities/supplier';

export const mockOrderItem: OrderItemDTO = {
  currency: Currency.BZD,
  description: faker.lorem.lines(1),
  name: faker.commerce.product(),
  price: Number(faker.commerce.price(25, 100, 2)),
  quantity: 1,
  id: 1,
};

export const mockSupplier: SupplierDTO = {
  homepage: faker.internet.url(),
  id: 1,
  logoUrl: faker.image.technics(240, 120, false),
  name: faker.company.companyName(),
  tag: faker.company.catchPhrase(),
  username: faker.company.catchPhraseNoun(),
};

export const mockPayment: OrderDTO = {
  currency: Currency.BZD,
  description: faker.commerce.productDescription(),
  invoice: faker.finance.bic(),
  orderItems: [mockOrderItem],
  status: OrderStatus.Pending,
  supplier: mockSupplier,
  createdAt: faker.date.recent(),
  amount: mockOrderItem.price,
  additionalData: {
    qrCodeUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
    paymentKey: faker.finance.bic(),
    payer: {
      email: faker.internet.email(),
      name: faker.internet.userName(),
    },
  },
};
