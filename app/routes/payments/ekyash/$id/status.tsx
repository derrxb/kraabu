import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import GetPayment from '~/domain/orders/services/ekaysh/get-payment';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    return json(payment.json(), HTTP_CODE.ok);
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
