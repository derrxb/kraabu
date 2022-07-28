import type { LoaderFunction, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { OrderDTO } from '~/domain/orders/entities/order';
import { OrderStatus } from '~/domain/orders/entities/order';
import type { UserEntity } from '~/domain/orders/entities/user';
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { PaymentPayDetails } from '~/ui/molecules/payment-pay-details';
import { PaymentSuccess } from '~/ui/molecules/payment-success';

export const meta: MetaFunction = ({ data }) => {
  const order = data.order as OrderDTO;

  return {
    title: `Payment Successful | ${order?.user?.businessName} - ${order?.user?.tag}`,
    description: `${order.orderItems?.[0].description}`,
  };
};

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const order = await new GetOrder(params).call();

    switch (order.status) {
      case OrderStatus.Completed:
        return json({ order: order.json() });
      case OrderStatus.Failed:
        return redirect(`/payments/ekyash/${order.invoice}/failed`);
      case OrderStatus.Pending:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceNo=${order.invoice}&paykey=${order.additionalData.paymentKey}`,
        );
      default:
        break;
    }

    return { order: order.json() };
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};

export default function Completed() {
  const data = useLoaderData() as { order: OrderDTO };

  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full md:w-1/2">
        <PaymentPayDetails order={data.order} user={data.order.user as UserEntity} hasOrderItemsDisplayed />
      </div>

      <div className="h-full w-full md:w-1/2">
        <PaymentSuccess />
      </div>
    </div>
  );
}
