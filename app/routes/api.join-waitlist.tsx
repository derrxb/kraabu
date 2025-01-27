import type { ActionFunctionArgs } from '@vercel/remix';
import { redirect } from '@vercel/remix';
import { SubscribeToNewsletter } from '~/domain/orders/services/subscribe-to-newsletter';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';

/**
 * This route is called by EKyash and it marks an order as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    await new SubscribeToNewsletter(request).call();

    return redirect('/');
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
