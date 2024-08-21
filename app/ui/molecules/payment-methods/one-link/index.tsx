import { useSearchParams } from '@remix-run/react';
import oneLinkLogo from 'public/images/onelink.webp';
import { usePaymentInputs } from 'react-payment-inputs';
import { useTypedFetcher } from 'remix-typedjson';
import { Button } from '~/ui/atoms/button';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Input } from '~/ui/atoms/input-field';
import { KrabuuTag } from '~/ui/atoms/krabuu-tag';
import { Label } from '~/ui/atoms/label';

export const OneLinkProps = {};

export const OneLinkForm = () => {
  const fetcher = useTypedFetcher();
  const [params] = useSearchParams();
  const { getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  return (
    <fetcher.Form
      method="POST"
      action="/orders/onelink/integrations/gigged"
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

      <input hidden name="invoiceno" value={String(params.get('invoiceno'))} />
      <input hidden name="paymentKey" value={String(params.get('paykey'))} />

      <div>
        <Label id="email">Email</Label>
        <Input disabled={fetcher.state === 'submitting'} name="email" required type="email" />
      </div>

      <div>
        <Label id="cardholderName">Cardholder name</Label>
        <Input disabled={fetcher.state === 'submitting'} name="cardholderName" required type="text" />
      </div>

      <div className="w-full grid grid-cols-2">
        <span className="col-span-2 font-semibold text-sm mb-2">Card Information</span>

        <div className="col-span-2">
          <Label id="cardNumber" htmlFor={getCardNumberProps().name}></Label>
          <Input
            required
            {...getCardNumberProps()}
            disabled={fetcher.state === 'submitting'}
            className="rounded-bl-none rounded-br-none focus-visible:!ring-opacity-5"
          />
        </div>

        <div className="col-span-1">
          <Label id="expiryDate" htmlFor={getExpiryDateProps().name}></Label>
          <Input
            required
            {...getExpiryDateProps()}
            disabled={fetcher.state === 'submitting'}
            className="rounded-tl-none rounded-r-none border-t-transparent focus-visible:z-10"
          />
        </div>

        <div className="col-span-1">
          <Label id="cvcProps" htmlFor={getCVCProps().name}></Label>
          <Input
            required
            {...getCVCProps()}
            disabled={fetcher.state === 'submitting'}
            className="border-t-transparent border-l-transborder-t-transparent rounded-l-none rounded-tr-none focus-visible:z-10"
          />
        </div>
      </div>

      <div>
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={fetcher.state === 'submitting' || fetcher.state === 'loading'}
        >
          Make Payment
        </Button>
      </div>

      <div className="mt-auto ml-auto">
        <KrabuuTag />
      </div>
    </fetcher.Form>
  );
};
