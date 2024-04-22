import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { json } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useEffect } from 'react';
import { OrderStatus } from '~/domain/orders/entities/order';
import { setIntervalAsync } from '~/domain/orders/library/async-internval';
import GetOrder from '~/domain/orders/services/ekaysh/integrations/gigged/get-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { PendingPayment } from '~/ui/organisms/pending-payment';

export const meta: MetaFunction = ({ data }) => {
  if (!data) {
    return [
      {
        title: 'Complete your order payment online | Powered by Krabuu',
      },
      {
        name: 'description',
        content: 'Confirm your order by completing payment with a local digital wallet.',
      },
    ];
  }

  return [
    {
      title: `Complete your ${data.order.user?.businessName} Order's Payment | Powered by Krabuu`,
    },
    {
      name: 'description',
      content: 'Confirm your order by completing payment with a local digital wallet.',
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const order = await new GetOrder(request).call();

    return json({ order: order?.json() }, HTTP_CODE.ok);
  } catch (e) {
    throw getFormattedFailureResponse(e, request);
  }
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const navigate = useNavigate();
  useEffect(() => {
    const timer: NodeJS.Timeout | null = null;

    setIntervalAsync(
      timer,
      async () => {
        const result = await axios.get(`/orders/ekyash/${data.order?.invoice}/status`);

        if (result.data?.status === OrderStatus.Completed || result.data?.status === OrderStatus.Failed) {
          navigate(`/orders/ekyash/integrations/gigged/${data.order?.invoice}`, {
            replace: true,
          });
        }
      },
      1500,
    );

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [data.order?.invoice, navigate]);

  return <PendingPayment order={data?.order!} hasOrderItemsDisplayed />;
}
