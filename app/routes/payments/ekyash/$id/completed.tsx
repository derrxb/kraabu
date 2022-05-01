import { json, LoaderFunction, redirect } from "remix";
import { PaymentStatus } from "~/domain/payments/entities/payment";
import GetPayment from "~/domain/payments/services/ekaysh/get-payment";

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    switch (payment.status) {
      case PaymentStatus.Completed:
        return json(payment);
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
  return (
    <div>
      <h1>Your order was completed successfully!!</h1>
    </div>
  );
}
