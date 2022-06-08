import type { ActionFunction } from 'remix';
import { redirect } from 'remix';
import { SubscribeToNewsletter } from '~/domain/orders/services/subscribe-to-newsletter';
import { getFormattedFailureResponse } from '~/representers/http-response-failure';

/**
 * This route is called by EKyash and it marks a payment as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action: ActionFunction = async ({ request }) => {
  try {
    await new SubscribeToNewsletter(request).call();

    return redirect('/');
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
