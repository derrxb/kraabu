import { json, LoaderFunction } from "remix";
import GetEKyashPayment from "~/domain/payments/services/get-ekyash-payment";
import { HTTP_CODE } from "~/representers/http-reponse-representer";

export const loader: LoaderFunction = async ({ params }) => {
  try {
    const payment = await new GetEKyashPayment(params).call();

    return json(payment.json(), HTTP_CODE.ok);
  } catch (e) {
    return json(
      { message: "No payment with the given ID found." },
      HTTP_CODE.not_found
    );
  }
};
