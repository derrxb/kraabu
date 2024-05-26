import type { LoaderFunctionArgs } from '@vercel/remix';
import GetOrder from '~/domain/orders/services/ekaysh/get-order';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { typedjson } from 'remix-typedjson';

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  try {
    const order = await new GetOrder(params).call();

    return typedjson(order.json(), HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
