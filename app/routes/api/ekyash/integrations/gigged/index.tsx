import type { ActionFunction } from 'remix';
import { json } from 'remix';
import { getErrorMessage } from '~/lib/error-messages';
import { HTTP_CODE } from '~/representers/http-response-representer';
import CompletePayment from '~/services/ekaysh/integrations/gigged/complete-payment';

/**
 * This route is called by EKyash and it marks a payment as completed.
 * TODO: Do we move these to API an api folder to be explicit that we're dealing with an API.
 */
export const action: ActionFunction = async ({ request }) => {
  try {
    const order = await new CompletePayment(request).call();

    return json({ payment: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    return json({ message: getErrorMessage(e) || 'Something unexpected happened' }, HTTP_CODE.bad_request);
  }
};
