import axios from 'axios';
import React, { useEffect } from 'react';
import type { LoaderFunction, MetaFunction } from 'remix';
import { json, useLoaderData, useNavigate } from 'remix';
import type { OrderDTO } from '~/domain/orders/entities/order';
import { OrderStatus } from '~/domain/orders/entities/order';
import { setIntervalAsync } from '~/domain/orders/library/async-internval';
import GetPayment from '~/domain/orders/services/ekaysh/integrations/gigged/get-payment.server';
import { PendingPayment } from '~/ui/organisms/pending-payment';

export const meta: MetaFunction = () => {
  return {
    title: 'GiggedBZ Order Payment | Krabuu - Easily Pay online in Belize',
    description:
      'Confirm your order by completing payment with your E-Kyash App. Scan the QR code to complete payment with your E-Kyash app.',
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const payment = await new GetPayment(request).call();

  return json({
    payment: payment?.json(),
  });
};

export default function Index() {
  const data = useLoaderData() as { payment: OrderDTO };

  const navigate = useNavigate();
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    setIntervalAsync(
      timer,
      async () => {
        const result = await axios.get(`/payments/ekyash/${data.payment.invoice}/status`);

        if (result.data?.status === OrderStatus.Completed) {
          navigate(`/payments/ekyash/integrations/gigged/${data.payment.invoice}`, {
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
  }, [data.payment.invoice, navigate]);

  return <PendingPayment payment={data.payment} />;
}
