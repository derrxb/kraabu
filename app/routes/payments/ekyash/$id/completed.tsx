import type { LoaderFunction, MetaFunction } from 'remix';
import { json, redirect, useLoaderData } from 'remix';
import type { OrderDTO } from '~/domain/orders/entities/order';
import { OrderStatus } from '~/domain/orders/entities/order';
import type { SupplierEntity } from '~/domain/orders/entities/supplier';
import GetPayment from '~/domain/orders/services/ekaysh/get-payment';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { PaymentPayDetails } from '~/ui/molecules/payment-pay-details';
import { PaymentSuccess } from '~/ui/molecules/payment-success';

export const meta: MetaFunction = ({ data }) => {
  const payment = data.payment as OrderDTO;

  return {
    title: `Payment Successful | ${payment?.supplier?.name} - ${payment?.supplier?.tag}`,
    description: `${payment.orderItems?.[0].description}`,
  };
};

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    switch (payment.status) {
      case OrderStatus.Completed:
        return json({ payment: payment.json() });
      case OrderStatus.Failed:
        return redirect(`/payments/ekyash/${payment.invoice}/failed`);
      case OrderStatus.Pending:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceNo=${payment.invoice}&paykey=${payment.additionalData.paymentKey}`,
        );
      default:
        break;
    }

    return { payment: payment.json() };
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};

export default function Completed() {
  const data = useLoaderData() as { payment: OrderDTO };

  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full md:w-1/2">
        <PaymentPayDetails
          payment={data.payment}
          vendor={data.payment.supplier as SupplierEntity}
          hasOrderItemsDisplayed
        />
      </div>

      <div className="h-full w-full md:w-1/2">
        <PaymentSuccess />
      </div>
    </div>
  );
}
