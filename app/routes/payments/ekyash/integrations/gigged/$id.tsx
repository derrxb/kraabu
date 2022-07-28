import { OrderStatus } from '@prisma/client';
import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';

export const loader = async ({ params, request }: LoaderArgs) => {
  try {
    const order = await new GetOrder(params).call();

    switch (order.status) {
      case OrderStatus.Pending:
        throw redirect(
          `/payments/ekyash/integrations/gigged?invoiceno=${order.invoice}&paykey=${order.additionalData?.paymentKey}`,
        );
      case OrderStatus.Completed:
      case OrderStatus.Failed:
        throw `${GiggedRoutes.OrderStatus}?invoiceNo=${order.invoice}`;
      default:
        throw redirect(
          `/payments/ekyash/integrations/gigged?invoiceno=${order.invoice}&paykey=${order.additionalData?.paymentKey}`,
        );
    }
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
