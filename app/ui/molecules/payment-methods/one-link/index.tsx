import { Form, useFetcher } from '@remix-run/react';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Input } from '~/ui/atoms/input-field';
import { Label } from '~/ui/atoms/label';
import { usePaymentInputs } from 'react-payment-inputs';
import { Button } from '~/ui/atoms/button';
import oneLinkLogo from 'public/images/onelink.webp';
import { KrabuuTag } from '~/ui/atoms/krabuu-tag';

export const OneLinkProps = {};

export const OneLinkForm = () => {
  const fetcher = useFetcher();
  const { getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  return (
    <fetcher.Form
      action="/orders/one-link/integrations/gigged"
      className="my-auto flex min-h-[55vh] w-full flex-col px-8 py-4 leading-relaxed sm:h-full md:px-16 md:py-12 xl:px-32 xl:pt-32 space-y-4"
    >
      <img src={oneLinkLogo} alt="one-link" className="w-24 h-10 mx-auto" />

      <Heading
        variant={HeadingVariant.H4}
        appearance={HeadingAppearance.Primary}
        className="pb-2 pt-5 text-xl font-bold text-gray-800 sm:text-3xl"
      >
        Complete payment with your OneLink
      </Heading>

      <span className="text-medium pb:4 text-base text-gray-500 md:pb-8">
        Fill out the form below to complete your payment with OneLink
      </span>

      <div>
        <Label id="email">Email</Label>
        <Input name="email" required type="email" />
      </div>

      <div>
        <Label id="nameOnCard">Cardholder name</Label>
        <Input name="nameOnCard" required type="text" />
      </div>

      <div className="w-full grid grid-cols-2">
        <span className="col-span-2 font-semibold text-sm mb-2">Card Information</span>

        <div className="col-span-2">
          <Label id="cardNumber" htmlFor={getCardNumberProps().name}></Label>
          <Input
            required
            {...getCardNumberProps()}
            className="rounded-bl-none rounded-br-none focus-visible:!ring-opacity-5"
          />
        </div>

        <div className="col-span-1">
          <Label id="expiryDate" htmlFor={getExpiryDateProps().name}></Label>
          <Input
            required
            {...getExpiryDateProps()}
            className="rounded-tl-none rounded-r-none border-t-transparent focus-visible:z-10"
          />
        </div>

        <div className="col-span-1">
          <Label id="cvcProps" htmlFor={getCVCProps().name}></Label>
          <Input
            required
            {...getCVCProps()}
            className="border-t-transparent border-l-transborder-t-transparent rounded-l-none rounded-tr-none focus-visible:z-10"
          />
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full" size="lg">
          Make Payment
        </Button>
      </div>

      <div className="mt-auto ml-auto">
        <KrabuuTag />
      </div>
    </fetcher.Form>
  );
};
