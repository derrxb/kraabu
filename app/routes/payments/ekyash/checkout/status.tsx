import { ActionFunction, json } from "remix";
import CompletePendingEkyashPayment from "~/domain/payments/services/ekaysh/complete-pending-ekyash-payment";
import { HTTP_CODE } from "~/representers/http-reponse-representer";

export const action: ActionFunction = async ({ request }) => {
  try {
    await new CompletePendingEkyashPayment(request).call();
  } catch (e) {
    return json(
      { message: "Something unexpected happened" },
      HTTP_CODE.bad_request
    );
  }
};
