import type { ActionFunctionArgs } from '@vercel/remix';
import { json } from '@remix-run/node';
import { CreateProductPaymentLink } from '~/domain/orders/services/create-product-payment-link';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';

export const action = async ({ params, request }: ActionFunctionArgs) => {
  try {
    const paymentLink = await new CreateProductPaymentLink(params, {} as any).call();

    return json(paymentLink, HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};
