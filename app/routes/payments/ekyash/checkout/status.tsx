import { ActionFunction, json } from "remix";
import CompletePayment from "~/domain/payments/services/ekaysh/complete-payment";
import { HTTP_CODE } from "~/representers/http-response-representer";

export const action: ActionFunction = async ({ request }) => {
  try {
    await new CompletePayment(request).call();
  } catch (e) {
    return json(
      { message: "Something unexpected happened" },
      HTTP_CODE.bad_request
    );
  }
};
