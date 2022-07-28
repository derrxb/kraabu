import axios from 'axios';
import React, { useEffect } from 'react';
import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData, useNavigate } from '@remix-run/react';
import type { OrderDTO } from '~/domain/orders/entities/order';
import { OrderStatus } from '~/domain/orders/entities/order';
import { setIntervalAsync } from '~/domain/orders/library/async-internval';
import GetOrder from '~/domain/orders/services/ekaysh/integrations/gigged/get-order.server';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { HTTP_CODE } from '~/presentation/representers/http-response-representer';
import { PendingPayment } from '~/ui/organisms/pending-payment';

export const meta: MetaFunction = () => {
  return {
    title: 'GiggedBZ Order Payment | Krabuu - Easily Pay online in Belize',
    description:
      'Confirm your order by completing payment with your E-Kyash App. Scan the QR code to complete payment with your E-Kyash app.',
  };
};

export const loader = async ({ request }: LoaderArgs) => {
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
    let timer: NodeJS.Timeout | null = null;

    setIntervalAsync(
      timer,
      async () => {
        const result = await axios.get(`/payments/ekyash/${data.order.invoice}/status`);

        if (result.data?.status === OrderStatus.Completed || result.data?.status === OrderStatus.Failed) {
          navigate(`/payments/ekyash/integrations/gigged/${data.order.invoice}`, {
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
  }, [data.order.invoice, navigate]);

  return <PendingPayment order={data.order} hasOrderItemsDisplayed={false} />;
}
