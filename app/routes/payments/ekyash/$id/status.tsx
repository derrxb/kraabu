import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetOrder(params).call();

    return json(payment.json(), HTTP_CODE.ok);
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
