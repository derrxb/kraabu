import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import CompleteOrder from '~/domain/orders/services/ekaysh/integrations/gigged/complete-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

/**
 * This route is called by EKyash and it marks an order as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action = async ({ request }: ActionArgs) => {
  try {
    const order = await new CompleteOrder(request).call();

    console.log('COMPLETE ORDER: ', order);

    return json({ order: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
