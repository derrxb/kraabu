import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import GetOrder from '~/domain/orders/services/ekaysh/integrations/gigged/get-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { PaymentMethod, PendingPayment } from '~/ui/organisms/pending-payment';

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    return [
      {
        title: 'Complete your order payment online via OneLink | Powered by Krabuu',
      },
      {
        name: 'description',
        content: 'Fill out the form below to make payment with your Credit Card',
      },
    ];
  }

  return [
    {
      title: `Complete your ${data.order.user?.businessName} Order's Payment | Powered by Krabuu`,
    },
    {
      name: 'description',
      content: 'Fill out the form below to make payment with your Credit Card',
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const order = await new GetOrder(request).call();

    return json({ order: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    console.log(e);
    throw getFormattedFailureResponse(e, request);
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return json(200);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return <PendingPayment order={data?.order!} hasOrderItemsDisplayed paymentMethod={PaymentMethod.OneLink} />;
}
