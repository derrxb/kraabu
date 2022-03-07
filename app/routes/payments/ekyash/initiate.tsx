import { ActionFunction, json } from "remix";
import CreatePendingEkyashPayment from "~/domain/payments/services/create-pending-ekyash-payment";

export const action: ActionFunction = async ({ request }) => {
  try {
    const payment = await new CreatePendingEkyashPayment(request).call();

    return json(payment.additionalData?.paymentKey, 200);
  } catch (e) {
    return json(
      {
        message: "Something unexpected happened. Please try again",
      },
      422
    );
  }
};
