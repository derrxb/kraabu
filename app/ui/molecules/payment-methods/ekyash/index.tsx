import { Button, ButtonColors } from '~/ui/atoms/button-deprecated';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { KrabuuTag } from '~/ui/atoms/krabuu-tag';
import { OrDivider } from '~/ui/atoms/or-divider';
import { QRCode } from '~/ui/atoms/qr-code';

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
      <Heading
        variant={HeadingVariant.H4}
        appearance={HeadingAppearance.Primary}
        className="pb-2 pt-5 text-xl font-bold text-gray-800 sm:text-3xl"
      >
        Complete payment with your{' '}
        <a
          href={paymentMethod.url}
          className="font-semibold"
          style={{ color: paymentMethod.color, fontSize: 'inherit', fontWeight: 'inherit' }}
          target="_blank"
          rel="noreferrer"
        >
          {paymentMethod.name}
        </a>{' '}
        App.
      </Heading>

      <span className="text-medium pb:4 text-base text-gray-500 md:pb-8">
        Scan the QR code to complete payment with your E-Kyash app.
      </span>

      <QRCode url={qr} />

      <OrDivider />

      <Button variant="link" color={ButtonColors.EKyash} href={deepLink} size="small" isFullWidth>
        Open and Pay with E-Kyash App
      </Button>

      <div className="mt-auto ml-auto">
        <KrabuuTag />
      </div>
    </div>
  );
};
