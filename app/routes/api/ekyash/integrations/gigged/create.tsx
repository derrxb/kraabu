import type { ActionFunction } from 'remix';
import { json } from 'remix';
import CreatePayment from '~/domain/orders/services/ekaysh/integrations/gigged/create-payment.server';
import { getFormattedFailureResponse } from '~/representers/http-response-failure';
import { HTTP_CODE } from '~/representers/http-response-representer';

export const action: ActionFunction = async ({ request }) => {
  try {
    const payment = await new CreatePayment(request).call();

    return json(payment.additionalData?.paymentKey, HTTP_CODE.ok);
  } catch (e) {
    return getFormattedFailureResponse(e);
  }
};
