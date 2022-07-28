import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

export const loader = async ({ params, request }: LoaderArgs) => {
  try {
    const order = await new GetOrder(params).call();

    return json(order.json(), HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
