import { rest } from 'msw';
import { nanoid } from 'nanoid';
import { Currency } from '~/domain/orders/entities/order';
import type { AuthorizationResponse, NewInvoiceResponse } from '~/domain/orders/library/ekyash-api';
import { EKyashAPIBase, EKyashRoutes } from '~/domain/orders/library/ekyash-api';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import { mockEKyashTransactionEntity, mockGiggedOrderEntity } from './fixtures';

export const handlers = [
  // Mock EKyash Authorization
  rest.post(`${EKyashAPIBase.StagingBase}/${EKyashRoutes.Authorization}`, (req, res, ctx) => {
    return res(
      ctx.json({
        session: 'a-random-authorization-code',
        firstName: 'Test',
        lastName: 'User',
        Mobile: 5554443333,
        Settings: '',
      } as AuthorizationResponse),
    );
  }),
  // Mock create invoice
  rest.post(`${EKyashAPIBase.StagingBase}/${EKyashRoutes.CreateInvoice}`, (req, res, ctx) => {
    return res(
      ctx.json({
        invoiceId: 1234567890, // TODO: This might be a string. Double check.
        paymentLink: mockEKyashTransactionEntity.deepLinkUrl,
        receiptUrl: mockEKyashTransactionEntity.invoiceUrl,
        qrUrl: mockEKyashTransactionEntity.qrCodeUrl,
      } as NewInvoiceResponse),
    );
  }),
  // Mocks the transaction update
  rest.post(GiggedRoutes.TransactionStatus, (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
  // Mocks the order details
  rest.get(GiggedRoutes.OrderDetails, (req, res, ctx) => {
    const { invoiceNo } = req.params;
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

    return res(ctx.json(data));
  }),
];
