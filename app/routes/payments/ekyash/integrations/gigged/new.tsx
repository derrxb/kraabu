import { ActionFunction, json } from "remix";
import CreatePendingGiggedPayment from "~/domain/payments/services/ekaysh/integrations/gigged/create-pending-gigged-payment";
import { HTTP_CODE } from "~/representers/http-reponse-representer";

export const action: ActionFunction = async ({ request }) => {
  try {
    const payment = await new CreatePendingGiggedPayment(request).call();

    return json(payment.additionalData?.paymentKey, HTTP_CODE.ok);
  } catch (e) {
    return json(
      {
        message: "Something unexpected happened. Please try again",
      },
      422
    );
  }
};
