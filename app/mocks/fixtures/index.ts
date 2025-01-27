import { faker } from '@faker-js/faker';
import { Currency, OrderStatus } from '@prisma/client';
import { nanoid } from 'nanoid';
import { EKyashEntity } from '~/domain/orders/entities/ekyash';
import { EKyashTransactionEntity } from '~/domain/orders/entities/ekyash-transaction';
import { OneLinkEntity } from '~/domain/orders/entities/onelink';
import type { GiggedOrderDetails } from '~/domain/orders/entities/order';
import { OrderEntity } from '~/domain/orders/entities/order';
import { OrderItemEntity } from '~/domain/orders/entities/order-item';
import { PaymentLinkEntity, PaymentLinkStatus } from '~/domain/orders/entities/payment-link';
import { ProductEntity } from '~/domain/orders/entities/product';
import { UserEntity } from '~/domain/orders/entities/user';
import type { CompletedPaymentCallbackData } from '~/domain/orders/library/ekyash-api';
import { getAuthenticatedHash, TransactionStatus } from '~/domain/orders/library/ekyash-api';
import type { GiggedOrderHandshake } from '~/domain/orders/library/gigged-api';

const mockHash = '7mpitx1h22du4ugogma1fc0jhkvvo6xjyid3xfidq6qew13hhg8hd0ygxqcizn7nh2r06dvo5a6enpmvdymlvij0kgx7ovdgmys4';
const mockKrabuuInvoiceId = 'i63wodfkb5gzu0k';
const mockOrderId = 'wq9dw3k8e3spvb2';
const mockPaymentKey = 'uzuk5gz00bk';

// GiggedArcadierSpecific
const mockGiggedArcadierGateway = 'www.fake.com';
const mockGiggedArcadierHash =
  '7hd0ygxqcizn7nh2r06dvo5a6enpmvdymlvij0kgx7ovdgmys4mpitx1h22du4ugogma1fc0jhkvvo6xjyid3xfidq6qew13hhg8';

// E-Kyash specific mocks
const mockEkyashInternalInvoiceId = '8e3spvb2gzu0k';
const mockEKyashTransactionId = 'cjgps6o73oks22i';
const mockSid = BigInt(23245184021);
const mockEKyashPhoneNumber = '5016431345'; // belize number
const mockEKyashAPIKey = 'INVALID_APPKEY17-4BAF-AA0F-B1568C5017A3';
const mockPinHash = 'INVALID_8d4fd24a970f49292076bf74df011e9f8d0e7850273666fcf4db458f1ee2d461';
const mockPinEncoded = 'INVALID_44c80bbde592aed7e2138b67ec71e94a5a22d39bc36d66c3373c1ea33013d3as';

/**
 * A base fake ekyash entity that does not yet exist in the database.
 */
export const mockEkyashEntity = new EKyashEntity({
  id: 1,
  apiKey: mockEKyashAPIKey,
  phone: mockEKyashPhoneNumber,
  pinEncoded: mockPinEncoded,
  pinHash: mockPinHash,
  sid: mockSid,
  userId: 1,
});

/**
 * A base fake ekyash entity that does not yet exist in the database.
 */
export const mockOneLinkEntity = new OneLinkEntity({
  id: 1,
  phone: mockEKyashPhoneNumber,
  userId: 1,
  accessToken: nanoid(),
  createdAt: new Date(),
  updatedAt: new Date(),
  salt: nanoid(),
});

/**
 * A base fake supplier entity that does not yet exist in the database.
 */
export const mockUserEntity = new UserEntity({
  id: 1,
  password: 'test',
  email: faker.internet.email(),
  website: faker.internet.url(),
  businessName: "Dave's Bike Shop",
  logoUrl: 'https://i.imgur.com/tfWgyRJ.png',
  username: 'bikingwithdave',
  createdAt: new Date(),
  updatedAt: new Date(),
  tag: 'Riding big bikes in Belize should be easy!',
  orders: [],
  products: [],
  ekyash: mockEkyashEntity,
});

// {
//   "PayeeInfos": [
//     {
//       "InternalUserId": 315583,
//       "Total": 17.6,
//       "Currency": "BZD",
//       "OrderId": "132841",
//       "Items": [
//         {
//           "Id": "132841 - 557343",
//           "ItemId": "557343",
//           "Sku": null,
//           "Name": "TEST-do-not-order",
//           "Description": "TEST-do-not-order",
//           "Currency": "BZD",
//           "Price": 0.1,
//           "Quantity": 2
//         },
//         {
//           "Id": "Admin Fee - Order 132841",
//           "ItemId": "",
//           "Sku": "",
//           "Name": "Fee (Deducted)",
//           "Description": "Admin Fee",
//           "Currency": "BZD",
//           "Price": 4.4,
//           "Quantity": 1
//         }
//       ],
//       "Reference": "GIGGEDB1724164032CTYO/132841",
//       "Id": "820f36a2-f68d-469c-8789-ab27a83b84d3",
//       "Name": "Derrick",
//       "Email": "derrickbol33@gmail.com",
//       "OrderUUID": "a8f153a2-4b96-4b4e-9244-8d0be6e8c7cd"
//     }
//   ],
//   "InvoiceNo": "GIGGEDB1724164032CTYO",
//   "Payer": {
//     "Id": "3aa42f99-4253-46a7-a9bf-632ef3bb9e22",
//     "Name": "John Snow",
//     "Email": "derrickbol33@gmail.com"
//   }
// }

/**
 * A base fake order-item entity that does not yet exist in the database.
 */
export const mockOrderItemEntity = new OrderItemEntity({
  currency: Currency.BZD,
  description: faker.lorem.lines(2),
  name: 'Kawasaki Ninja 400 deep cleaning session',
  // convert to cents
  price: Number(faker.commerce.price({ min: 200, max: 250, dec: 2 })) * 100,
  quantity: 1,
  id: 1,
  orderId: 1,
});

/**
 * A base fake ekyash transaction entity that does not yet exist in the database.
 */
export const mockEKyashTransactionEntity = new EKyashTransactionEntity({
  deepLinkUrl: faker.internet.url(),
  id: 1,
  invoiceId: mockEkyashInternalInvoiceId,
  invoiceUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
  qrCodeUrl: 'https://boofcv.org/images/3/35/Example_rendered_qrcode.png',
  orderId: 1,
  status: OrderStatus.Pending,
  transactionId: mockEKyashTransactionId,
});

export const mockPaymentLinkEntity = new PaymentLinkEntity({
  url: nanoid(),
  status: PaymentLinkStatus.Pending,
});

export const mockGiggedProductEntity = new ProductEntity({
  coverImage:
    'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  thumbnailImage:
    'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  currency: 'BZD', // $500 BZD,
  description: 'A used MacBook Pro',
  id: 1,
  name: 'Used MacBook Pro 14inches',
  price: 1_000 * 100,
  publicUrl: 'used-macbook-pro',
  published: true,
  userId: Number(mockUserEntity.id),
  paymentLinks: [mockPaymentLinkEntity],
});

/**
 * A base fake gigged-liked-item entity that does not yet exist in the database.
 */
export const mockGiggedOrderEntity = new OrderEntity({
  productId: Number(mockGiggedProductEntity.id),
  amount: 10_000,
  currency: Currency.BZD,
  description: 'A mock order with payment',
  invoice: mockKrabuuInvoiceId,
  status: OrderStatus.Pending,
  userId: mockUserEntity.id as number,
  user: mockUserEntity,
  orderItems: [mockOrderItemEntity],
  ekyashTransaction: mockEKyashTransactionEntity,
  id: 1,
  additionalData: {
    gateway: mockGiggedArcadierGateway,
    hashkey: mockGiggedArcadierHash,
    payer: {
      email: 'user@example.com',
      name: 'test user',
    },
    paymentKey: mockPaymentKey,
  } as GiggedOrderDetails,
});

/**
 * A base fake gigged order handshake.
 */
export const mockGiggedOrderHandshake: GiggedOrderHandshake = {
  currency: Currency.BZD,
  gateway: 'random-gateway',
  hashkey: mockHash,
  invoiceno: mockKrabuuInvoiceId,
  total: String(100), // $100.00
};

/**
 * A base Gigged BZ specific failed ekyash callback response.
 */
export const mockFailedGiggedEKyashOrderCallback: CompletedPaymentCallbackData = {
  hash: getAuthenticatedHash(
    {
      hash: mockHash,
      invoiceId: mockEkyashInternalInvoiceId,
      orderId: mockOrderId,
      statusPay: TransactionStatus.Declined,
    },
    mockEkyashEntity.apiKey as string,
  ),
  invoiceId: mockEkyashInternalInvoiceId,
  orderId: mockOrderId,
  statusPay: TransactionStatus.Declined,
  transactionId: mockEKyashTransactionId,
};

/**
 * A base Gigged BZ specific success ekyash callback response.
 */
export const mockSuccessGiggedEKyashOrderCallback: CompletedPaymentCallbackData = {
  hash: getAuthenticatedHash(
    {
      hash: mockHash,
      invoiceId: mockKrabuuInvoiceId,
      orderId: mockOrderId,
      statusPay: TransactionStatus.Accepted,
    },
    mockEkyashEntity.apiKey as string,
  ),
  invoiceId: mockEkyashInternalInvoiceId,
  orderId: mockOrderId,
  statusPay: TransactionStatus.Accepted,
  transactionId: mockEKyashTransactionId,
};
