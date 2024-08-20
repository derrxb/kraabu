import type { ActionFunctionArgs } from '@vercel/remix';
import CreateOrder from '~/domain/orders/services/ekaysh/integrations/gigged/create-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { typedjson } from 'remix-typedjson';
import { PaymentMethod } from '~/domain/orders/services/ekaysh/integrations/gigged';

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const order = await new CreateOrder(request, PaymentMethod.OneLink).call();

    return typedjson(order.additionalData?.paymentKey, HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
