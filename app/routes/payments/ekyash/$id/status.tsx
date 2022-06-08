import type { LoaderFunction } from 'remix';
import { json } from 'remix';
import GetPayment from '~/domain/orders/services/ekaysh/get-payment';
import { getFormattedFailureResponse } from '~/representers/http-response-failure';
import { HTTP_CODE } from '~/representers/http-response-representer';

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const payment = await new GetPayment(params).call();

    return json(payment.json(), HTTP_CODE.ok);
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
