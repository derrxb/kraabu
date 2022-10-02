import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { OrderStatus } from '~/domain/orders/entities/order';
import { GiggedRoutes } from '~/domain/orders/library/gigged-api';
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';

export const loader = async ({ params, request }: LoaderArgs) => {
  try {
    const order = await new GetOrder(params).call();

    console.log(params);
    console.log('EKYASH > integrations > gigged: ', order);

    switch (order.status) {
      case OrderStatus.Pending:
        throw redirect(
          `/orders/ekyash/integrations/gigged?invoiceno=${order.invoice}&paykey=${order.additionalData?.paymentKey}`,
        );
      case OrderStatus.Completed:
      case OrderStatus.Failed:
        throw redirect(`${GiggedRoutes.OrderStatus}?invoiceNo=${order.invoice}`);
      default:
        throw redirect(
          `/orders/ekyash/integrations/gigged?invoiceno=${order.invoice}&paykey=${order.additionalData?.paymentKey}`,
        );
    }
  } catch (e) {
    console.log(e);
    throw getFormattedFailureResponse(e, request);
  }
};
