import { json, LoaderFunction } from "remix";
import GetPayment from "~/domain/payments/services/ekaysh/get-payment";
import { HTTP_CODE } from "~/representers/http-response-representer";

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const payment = await new GetPayment(params).call();

    return json(payment.json(), HTTP_CODE.ok);
  } catch (e) {
    return json(
      { message: "No payment with the given ID found." },
      HTTP_CODE.not_found
    );
  }
};
