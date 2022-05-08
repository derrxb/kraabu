import type { ActionFunction } from 'remix';
import { json } from 'remix';
import { HTTP_CODE } from '~/representers/http-response-representer';
import CreatePayment from '~/services/ekaysh/integrations/gigged/create-payment';

export const action: ActionFunction = async ({ request }) => {
  try {
    const payment = await new CreatePayment(request).call();

    return json(payment.additionalData?.paymentKey, HTTP_CODE.ok);
  } catch (e) {
    return json(
      {
        message: 'Something unexpected happened. Please try again',
      },
      422,
    );
  }
};
