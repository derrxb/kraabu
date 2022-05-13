import axios from 'axios';
import React, { useEffect } from 'react';
import type { LoaderFunction, MetaFunction } from 'remix';
import { json, useLoaderData, useNavigate } from 'remix';
import type { OrderEntity } from '~/domain/orders/entities/payment';
import { OrderStatus } from '~/domain/orders/entities/payment';
import type { SupplierEntity } from '~/domain/orders/entities/supplier';
import { setIntervalAsync } from '~/domain/orders/library/async-internval';
import GetPayment from '~/domain/orders/services/ekaysh/integrations/gigged/get-payment.server';
import { PaymentPayCode } from '~/ui/molecules/payment-pay-code';
import { PaymentPayDetails } from '~/ui/molecules/payment-pay-details';

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
  const data = useLoaderData() as { payment: OrderEntity };

  const navigate = useNavigate();
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    setIntervalAsync(
      timer,
      async () => {
        const result = await axios.get(`/payments/ekyash/${data.payment.invoice}/status`);

        if (result.data?.status === OrderStatus.Completed) {
          navigate(`/payments/ekyash/${data.payment.invoice}/completed`, {
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

  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full lg:w-1/2">
        <PaymentPayDetails payment={data.payment} vendor={data.payment.supplier as SupplierEntity} />
      </div>

      <div className="h-full w-full lg:w-1/2">
        {data.payment.additionalData.qrCodeUrl ? (
          <PaymentPayCode
            qr={data.payment.additionalData.qrCodeUrl as string}
            paymentMethod={{
              name: 'E-Kyash',
              color: '#39ae49',
              url: 'https://www.e-kyash.com/',
            }}
          />
        ) : (
          <div className="w-full rounded-md bg-red-200 py-2 px-4 pb-4">
            <span className="text-red-700">
              Oh, no! Something unexpected happened. Don't worry, your wallet has not been charged.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
