import type { LoaderFunction, MetaFunction } from 'remix';
import { json, redirect, useLoaderData } from 'remix';
import type { OrderEntity } from '~/domain/orders/entities/payment';
import { OrderStatus } from '~/domain/orders/entities/payment';
import type { SupplierEntity } from '~/domain/orders/entities/supplier';
import GetPayment from '~/domain/orders/services/ekaysh/get-payment';
import { PaymentPayDetails } from '~/ui/molecules/payment-pay-details';
import { PaymentSuccess } from '~/ui/molecules/payment-success';

export const meta: MetaFunction = () => {
  return {
    title: 'Order Success | Giggedbz - Make life easier by hiring a Gigger to help',
  };
};

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    switch (payment.status) {
      case OrderStatus.Completed:
        return json({ payment });
      case OrderStatus.Failed:
        return redirect(`/payments/ekyash/${payment.invoice}/failed`);
      case OrderStatus.Pending:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceNo=${payment.invoice}&paykey=${payment.additionalData.paymentKey}`,
        );
      default:
        break;
    }
  } catch (e) {
    return json(
      {
        message: 'There was an error with completing your payment.',
      },
      404,
    );
  }
};

export default function Completed() {
  const data = useLoaderData() as { payment: OrderEntity };

  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full md:w-1/2">
        <PaymentPayDetails payment={data.payment} vendor={data.payment.supplier as SupplierEntity} />
      </div>

      <div className="h-full w-full md:w-1/2">
        <PaymentSuccess />
      </div>
    </div>
  );
}
