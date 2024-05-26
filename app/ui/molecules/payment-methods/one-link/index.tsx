import { Form } from '@remix-run/react';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Input } from '~/ui/atoms/input-field';
import { Label } from '~/ui/atoms/label';
import { usePaymentInputs } from 'react-payment-inputs';
import { Button } from '~/ui/atoms/button';

export const OneLinkProps = {};

export const OneLinkForm = () => {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();

  return (
    <Form>
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
        <Label id="nameOnCard"></Label>
        <Input name="nameOnCard" />
      </div>

      <div>
        <Label id="cardNumber" htmlFor={getCardNumberProps().name}></Label>
        <Input {...getCardNumberProps()} />
      </div>

      <div className="w-full justify-between">
        <div>
          <Label id="expiryDate" htmlFor={getExpiryDateProps().name}></Label>
          <Input {...getExpiryDateProps()} />
        </div>

        <div>
          <Label id="cvcProps" htmlFor={getCVCProps().name}></Label>
          <Input {...getCVCProps()} />
        </div>
      </div>

      <div>
        <Button type="button" variant="link">
          Cancel
        </Button>
        <Button type="submit">Make Payment</Button>
      </div>
    </Form>
  );
};
