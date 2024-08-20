import { http, HttpResponse } from 'msw';
import { nanoid } from 'nanoid';
import { Currency } from '~/domain/orders/entities/order';
import type { AuthorizationResponse, NewInvoiceResponse } from '~/domain/orders/library/ekyash-api';
import { EKyashRoutes, getEKyashApiBase } from '~/domain/orders/library/ekyash-api';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import { mockEKyashTransactionEntity, mockGiggedOrderEntity } from './fixtures';
import { getOneLinkApiBase, NewPaymentData, OneLinkRoutes } from '~/domain/orders/library/onelink-api';
import { NO_BALANCE_CREDIT_CARD, VALID_CREDIT_CARD } from 'test/credit-card';

export const handlers = [
  // Mock EKyash Authorization
  http.post(`${getEKyashApiBase()}/${EKyashRoutes.Authorization}`, ({}) => {
    return HttpResponse.json({
      session: 'a-random-authorization-code',
      firstName: 'Test',
      lastName: 'User',
      Mobile: 5554443333,
      Settings: '',
    } as AuthorizationResponse);
  }),
  // Mock create invoice
  http.post(`${getEKyashApiBase()}/${EKyashRoutes.CreateInvoice}`, ({}) => {
    return HttpResponse.json({
      invoiceId: 1234567890, // TODO: This might be a string. Double check.
      paymentLink: mockEKyashTransactionEntity.deepLinkUrl,
      receiptUrl: mockEKyashTransactionEntity.invoiceUrl,
      qrUrl: mockEKyashTransactionEntity.qrCodeUrl,
    } as NewInvoiceResponse);
  }),
  // Mocks the transaction update
  http.post(GiggedRoutes.TransactionStatus, ({}) => {
    return HttpResponse.json({ success: true });
  }),
  // Mocks the order details
  http.get(GiggedRoutes.OrderDetails, ({ request }) => {
    const invoiceNo =
      new URL(request.url).searchParams.get('invoiceNo') ?? new URL(request.url).searchParams.get('invoiceno');
    const total = mockGiggedOrderEntity.amount / 100; // convert to dollars

    const orderId = nanoid();
    const data = {
      PayeeInfos: [
        {
          Total: total,
          Currency: Currency.BZD,
          OrderId: orderId,
          // NOTE: Only one item seems to be returned from the Arcadier API.
          // I think this is because the the admin fee is disabled from Arcadier.
          Items: [
            {
              Id: `${mockGiggedOrderEntity.ekyashTransaction?.invoiceId} - 8417`,
              ItemId: '8417',
              Sku: 'sku-1232',
              Name: mockGiggedOrderEntity.orderItems[0].name,
              Description: mockGiggedOrderEntity.orderItems[0].description,
              Currency: mockGiggedOrderEntity.orderItems[0].currency,
              Price: mockGiggedOrderEntity.orderItems[0].price / 100, // convert cents to dollars
              Quantity: mockGiggedOrderEntity.orderItems[0].quantity,
            },
            {
              Id: `Admin Fee - Order ${orderId}`,
              ItemId: '',
              Sku: '',
              Name: 'Fee (Deducted)',
              Description: 'Admin Fee',
              Currency: 'BZD',
              Price: Number((Number(total) * 0.05).toFixed(2)),
              Quantity: 1,
            },
          ],
          Id: nanoid(),
          Name: mockGiggedOrderEntity.additionalData.payer?.name,
          Email: mockGiggedOrderEntity.additionalData.payer?.email,
        },
      ],
      InvoiceNo: invoiceNo,
      Payer: {
        Id: nanoid(),
        Name: mockGiggedOrderEntity.additionalData.payer?.name,
        Email: mockGiggedOrderEntity.additionalData.payer?.email,
      },
    };

    return HttpResponse.json(data);
  }),
  // http.post(`${getOneLinkApiBase()}${OneLinkRoutes.Payment}`, async ({ request }) => {
  http.post(`https://api.onelink.bz/payment`, async ({ request }) => {
    const body: NewPaymentData = (await request.json()) as any;

    if (body.cardNumber === NO_BALANCE_CREDIT_CARD) {
      return HttpResponse.json(
        {
          msg: '51: INSUFF FUNDS',
          refnumber: nanoid(),
          code: '30',
        },
        {
          status: 200,
        },
      );
    }

    if (body.cardNumber === VALID_CREDIT_CARD) {
      return HttpResponse.json(
        {
          msg: 'success',
        },
        { status: 200 },
      );
    }
  }),
];
