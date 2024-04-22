import type { ActionFunctionArgs } from '@vercel/remix';
import { json } from '@remix-run/node';
import CreateOrder from '~/domain/orders/services/ekaysh/integrations/gigged/create-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const order = await new CreateOrder(request).call();

    return json(order.additionalData?.paymentKey, HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
