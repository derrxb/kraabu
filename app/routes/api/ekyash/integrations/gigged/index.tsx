import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import CompletePayment from '~/domain/orders/services/ekaysh/integrations/gigged/complete-payment.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

/**
 * This route is called by EKyash and it marks a payment as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action: ActionFunction = async ({ request }) => {
  try {
    const order = await new CompletePayment(request).call();

    return json({ payment: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
