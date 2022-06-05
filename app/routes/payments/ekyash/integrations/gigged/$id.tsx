import { OrderStatus } from '@prisma/client';
import type { LoaderFunction } from 'remix';
import { json, redirect } from 'remix';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import GetPayment from '~/domain/orders/services/ekaysh/get-payment';
import { HTTP_CODE } from '~/representers/http-response-representer';

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const payment = await new GetPayment(params).call();

    switch (payment.status) {
      case OrderStatus.Pending:
        return redirect('/');
      case OrderStatus.Completed:
      case OrderStatus.Failed:
        return redirect(`${GiggedRoutes.OrderStatus}?invoiceNo=${payment.invoice}`);
      default:
        return redirect('/');
    }
  } catch (e) {
    return json({ message: 'There was an error loading your order.' }, HTTP_CODE.bad_request);
  }
};
