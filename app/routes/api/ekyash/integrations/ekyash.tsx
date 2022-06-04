import type { ActionFunction } from 'remix';
import { json } from 'remix';
import CompletePayment from '~/domain/orders/services/ekaysh/complete-payment';
import { HTTP_CODE } from '~/representers/http-response-representer';

/**
 * This route is called by EKyash and it marks a payment as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action: ActionFunction = async ({ request }) => {
  try {
    await new CompletePayment(request).call();
  } catch (e) {
    return json({ message: 'Something unexpected happened' }, HTTP_CODE.bad_request);
  }
};
