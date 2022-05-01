import {
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from "remix";
import gigged from "~/assets/images/gigged-logo.png";
import Payment, { PaymentStatus } from "~/domain/payments/entities/payment";
import GetPayment from "~/domain/payments/services/ekaysh/get-payment";
import { PaymentPayDetails } from "~/ui/molecules/payment-pay-details";
import { PaymentSuccess } from "~/ui/molecules/payment-success";

export const meta: MetaFunction = () => {
  return {
    title:
      "Payment Success | Giggedbz - Make life easier by hiring a Gigger to help",
  };
};

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    switch (payment.status) {
      case PaymentStatus.Completed:
        return json({ payment });
      case PaymentStatus.Failure:
        return redirect(`/payments/ekyash/${payment.invoice}/failed`);
      case PaymentStatus.Pending:
        return redirect(
          `/payments/ekyash/integrations/gigged?invoiceNo=${payment.invoice}&paykey=${payment.additionalData.paymentKey}`
        );
      default:
        break;
    }
  } catch (e) {
    return json(
      {
        message: "There was an error with completing your payment.",
      },
      404
    );
  }
};

export default function Completed() {
  const data = useLoaderData() as { payment: Payment };

  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full md:w-1/2">
        <PaymentPayDetails
          payment={data.payment}
          vendor={{
            name: "GiggedBz",
            logo: gigged,
            url: "http://gigged.bz",
            tag: "Make life easier by hiring a Gigger to help",
          }}
        />
      </div>

      <div className="h-full w-full md:w-1/2">
        <PaymentSuccess />
      </div>
    </div>
  );
}
