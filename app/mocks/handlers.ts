import faker from '@faker-js/faker';
import { rest } from 'msw';
import { nanoid } from 'nanoid';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';

export const handlers = [
  // Mocks the transaction update
  rest.post(GiggedRoutes.TransactionStatus, (req, res, ctx) => {
    console.log('Request');
    return res(ctx.json({ success: true }));
  }),
  // Mocks the payment details
  rest.get(GiggedRoutes.OrderDetails, (req, res, ctx) => {
    const { invoiceNo } = req.params;

    const orderId = nanoid();
    const total = faker.finance.amount(50, 150);
    const data = {
      PayeeInfos: [
        {
          Total: Number(Number(total).toFixed(2)),
          Currency: 'BZD',
          OrderId: orderId,
          Items: [
            {
              Id: `${orderId} - 8417`,
              ItemId: '8417',
              Sku: 'sku-1232',
              Name: faker.lorem.lines(1),
              Description: faker.lorem.sentence(20),
              Currency: faker.finance.amount(),
              Price: Number((Number(total) * 0.93).toFixed(2)),
              Quantity: 1,
            },
            {
              Id: `Admin Fee - Order ${orderId}`,
              ItemId: '',
              Sku: '',
              Name: 'Fee (Deducted)',
              Description: 'Admin Fee',
              Currency: 'BZD',
              Price: Number((Number(total) * 0.07).toFixed(2)),
              Quantity: 1,
            },
          ],
          Id: nanoid(),
          Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          Email: faker.internet.email(),
        },
        {
          Total: Number(Number(total) * 0.07).toFixed(2),
          Currency: 'BZD',
          OrderId: orderId,
          Items: [
            {
              Id: 'ARCTICK - 1234567',
              ItemId: '',
              Sku: '',
              Name: 'Fee',
              Description: 'Admin Fee',
              Currency: 'BZD',
              Price: Number((Number(total) * 0.07).toFixed(2)),
              Quantity: 1,
            },
          ],
          Id: nanoid(),
          Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          Email: faker.internet.email(),
        },
      ],
      InvoiceNo: invoiceNo,
      Payer: {
        Id: nanoid(),
        Name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        Email: faker.internet.email(),
      },
    };

    return res(ctx.json(data));
  }),
];
