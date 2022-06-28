import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import CreatePayment from '~/domain/orders/services/ekaysh/integrations/gigged/create-payment.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

export const action: ActionFunction = async ({ request }) => {
  try {
    const payment = await new CreatePayment(request).call();

    return json(payment.additionalData?.paymentKey, HTTP_CODE.ok);
  } catch (e) {
    return getFormattedFailureResponse(e, request);
  }
};
