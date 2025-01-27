import type { ActionFunctionArgs } from '@vercel/remix';
import { json } from '@remix-run/node';
import CompleteOrder from '~/domain/orders/services/ekaysh/integrations/gigged/complete-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { typedjson } from 'remix-typedjson';

/**
 * This route is called by EKyash and it marks an order as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const order = await new CompleteOrder(request).call();

    return typedjson({ order: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
