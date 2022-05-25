import React from 'react';
import { Button, ButtonColors } from '~/ui/atoms/button';
import { KrabuuTag } from '~/ui/atoms/krabuu-tag';
import { OrDivider } from '~/ui/atoms/or-divider';

export type PaymentPayCodeProps = {
  qr: string;
  deepLink?: string;
  paymentMethod: {
    name: string;
    url: string;
    color: string;
  };
};

export const PaymentPayCode = ({ qr, paymentMethod, deepLink }: PaymentPayCodeProps) => {
  return (
    <div className="my-auto flex min-h-[55vh] w-full flex-col px-8 py-4 leading-relaxed sm:h-full md:px-16 md:py-12 xl:px-32 xl:pt-32">
      <h1 className="pb-2 pt-5 text-xl font-bold text-gray-800 sm:text-3xl">
        Confirm your order by completing payment with your{' '}
        <a
          href={paymentMethod.url}
          className="font-semibold"
          style={{ color: paymentMethod.color }}
          target="_blank"
          rel="noreferrer"
        >
          {paymentMethod.name}
        </a>{' '}
        App.
      </h1>

      <span className="text-medium pb:4 text-base text-gray-500 md:pb-8">
        Scan the QR code to complete payment with your E-Kyash app.
      </span>

      <img src={qr} alt="payment qr code" className="h-48 w-48 self-center md:h-64 md:w-64" />

      <OrDivider />

      <Button variant="link" label="Pay with E-Kyash App" color={ButtonColors.EKyash} href={deepLink} size="small" />

      <div className="mt-auto ml-auto">
        <KrabuuTag />
      </div>
    </div>
  );
};
