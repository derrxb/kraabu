import { OrderStatus } from '@prisma/client';
import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const order = await new GetOrder(params).call();

    switch (order.status) {
      case OrderStatus.Pending:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceno=${order.invoice}&paykey=${order.additionalData?.paymentKey}`,
        );
      case OrderStatus.Completed:
      case OrderStatus.Failed:
        return redirect(`${GiggedRoutes.OrderStatus}?invoiceNo=${order.invoice}`);
      default:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceno=${order.invoice}&paykey=${order.additionalData?.paymentKey}`,
        );
    }
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
