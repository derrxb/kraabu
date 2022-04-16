import { ActionFunction, json, redirect } from "remix";
import CompletePendingEkyashPayment from "~/domain/payments/services/complete-pending-ekyash-payment";

export const action: ActionFunction = async ({ params }) => {
  try {
    const payment = await new CompletePendingEkyashPayment(params).call();

    return redirect(
      `https://giggedbz.arcadier.io/user/checkout/current-status?invoiceNo=${payment?.invoice}`
    );
  } catch (e) {
    console.log(e);
    return json(
      {
        message: "There was an error with completing your payment.",
      },
      404
    );
  }
};
