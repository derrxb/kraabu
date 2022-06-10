import faker from '@faker-js/faker';
import type { Ekyash } from '@prisma/client';
import { Currency, OrderStatus } from '@prisma/client';
import { EKyashEntity } from '~/domain/orders/entities/ekyash';
import { EKyashTransactionEntity } from '~/domain/orders/entities/ekyash-transaction';
import type { GiggedOrderDetails } from '~/domain/orders/entities/order';
import { OrderEntity } from '~/domain/orders/entities/order';
import { OrderItemEntity } from '~/domain/orders/entities/order-item';
import { SupplierEntity } from '~/domain/orders/entities/supplier';
import type { CompletedPaymentCallbackData } from '~/domain/orders/library/ekyash-api';
import { getAuthenticatedHash, TransactionStatus } from '~/domain/orders/library/ekyash-api';
import type { GiggedOrderHandshake } from '~/domain/orders/library/gigged-api';

const mockHash = '7mpitx1h22du4ugogma1fc0jhkvvo6xjyid3xfidq6qew13hhg8hd0ygxqcizn7nh2r06dvo5a6enpmvdymlvij0kgx7ovdgmys4';
const mockInvoice = 'i63wodfkb5gzu0k';
const mockOrderId = 'wq9dw3k8e3spvb2';
const mockTransactionId = 'cjgps6o73oks22i';
const mockPaymentKey = 'uzuk5gz00bk';
const mockSid = BigInt(23245184021);
const mockEKyashAPIKey = 'INVALID_APPKEY17-4BAF-AA0F-B1568C5017A3';
const mockEkyashInternalInvoiceId = '8e3spvb2gzu0k';
const mockPinHash = 'INVALID_8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461';
const mockPinEncoded = 'INVALID_44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d3as';

const mockEkyashEntity = new EKyashEntity({
  api: 'ekyash.api',
  apiKey: mockEKyashAPIKey,
  id: 1,
  phone: '5016431345', // belize number
  pinEncoded: mockPinEncoded,
  pinHash: mockPinHash,
  sid: mockSid,
});

export const mockSupplierEntity = new SupplierEntity({
  homepage: faker.internet.url(),
  logoUrl: 'https://i.imgur.com/tfWgyRJ.png',
  name: "Dave's Bike Shop",
  username: 'bikingwithdave',
  tag: 'Riding big bikes in Belize should be easy!',
  id: 1,
  ekyashId: mockEkyashEntity.id,
});

export const mockOrderItemEntity = new OrderItemEntity({
  currency: Currency.BZD,
  description: faker.lorem.lines(2),
  name: 'Kawasaki Ninja 400 deep cleaning session',
  // convert to cents
  price: Number(faker.commerce.price(200, 250, 2)) * 100,
  quantity: 1,
  id: 1,
  orderId: 1,
});

export const mockEKyashTransactionEntity = new EKyashTransactionEntity({
  deepLinkUrl: 'N/A',
  id: 1,
  invoiceId: mockInvoice,
  invoiceUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
  qrCodeUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
  orderId: 1,
  status: OrderStatus.Pending,
  transactionId: mockTransactionId,
});

export const mockGiggedOrderEntity = new OrderEntity({
  amount: 10_000,
  currency: Currency.BZD,
  description: 'A mock order with payment',
  invoice: mockInvoice,
  status: OrderStatus.Pending,
  supplierId: mockSupplierEntity.id,
  supplier: mockSupplierEntity,
  orderItems: [mockOrderItemEntity],
  ekyashTransaction: mockEKyashTransactionEntity,
  id: 1,
  additionalData: {
    gateway: '',
    hashkey: '',
    payer: {
      email: 'user@example.com',
      name: 'test user',
    },
    paymentKey: mockPaymentKey,
  } as GiggedOrderDetails,
});

export const mockedSupplierEkyashCredentials: Partial<Ekyash> = {
  api: 'random.api.com',
  apiKey: mockEKyashAPIKey,
  phone: '5016612881',
  sid: BigInt(23245184021), //invalid
  pinHash: mockPinHash,
  pinEncoded: mockPinEncoded,
};

export const mockGiggedOrderHandshake: GiggedOrderHandshake = {
  currency: Currency.BZD,
  gateway: 'random-gateway',
  hashkey: mockHash,
  invoiceno: mockInvoice,
  total: String(100), // $100.00
};

export const mockedFailedGiggedEKyashOrderCallback: CompletedPaymentCallbackData = {
  hash: getAuthenticatedHash(
    {
      hash: mockHash,
      invoiceId: mockEkyashInternalInvoiceId,
      orderId: mockOrderId,
      statusPay: TransactionStatus.Declined,
    },
    mockedSupplierEkyashCredentials.apiKey as string,
  ),
  invoiceId: mockEkyashInternalInvoiceId,
  orderId: mockOrderId,
  statusPay: TransactionStatus.Declined,
  transactionId: mockTransactionId,
};

export const mockedSuccessGiggedEKyashOrderCallback: CompletedPaymentCallbackData = {
  hash: getAuthenticatedHash(
    {
      hash: mockHash,
      invoiceId: mockInvoice,
      orderId: mockOrderId,
      statusPay: TransactionStatus.Accepted,
    },
    mockedSupplierEkyashCredentials.apiKey as string,
  ),
  invoiceId: mockEkyashInternalInvoiceId,
  orderId: mockOrderId,
  statusPay: TransactionStatus.Accepted,
  transactionId: mockTransactionId,
};
