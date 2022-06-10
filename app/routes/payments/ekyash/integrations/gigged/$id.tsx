import { OrderStatus } from '@prisma/client';
import type { LoaderFunction } from 'remix';
import { redirect } from 'remix';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import GetPayment from '~/domain/orders/services/ekaysh/get-payment';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    switch (payment.status) {
      case OrderStatus.Pending:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceno=${payment.invoice}&paykey=${payment.additionalData?.paymentKey}`,
        );
      case OrderStatus.Completed:
      case OrderStatus.Failed:
        return redirect(`${GiggedRoutes.OrderStatus}?invoiceNo=${payment.invoice}`);
      default:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceno=${payment.invoice}&paykey=${payment.additionalData?.paymentKey}`,
        );
    }
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
