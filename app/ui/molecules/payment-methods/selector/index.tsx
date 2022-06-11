import { Button, ButtonColors } from '~/ui/atoms/button';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';

export type PaymentMethodSelectorProps = {
  onClick: (method: 'ekyash' | 'digiwallet') => void;
};

export const PaymentMethodSelector = (props: PaymentMethodSelectorProps) => {
  return (
    <div className="max-w-[480px]">
      <Heading variant={HeadingVariant.H4} appearance={HeadingAppearance.UnStyled} className="mb-2">
        Confirm order by completing payment with one of the supported e-wallets.
      </Heading>

      <p className="mb-8 text-sm text-gray-500">
        Once selected payment we’ll send a payment request to your mobile app.
      </p>

      <ul>
        <li className="mb-8">
          <Button
            size="small"
            isFullWidth
            variant="button"
            onClick={() => props.onClick('ekyash')}
            color={ButtonColors.EKyash}
          >
            Pay with E-Kyash
          </Button>
        </li>

        <li className="mb-8">
          <Button
            size="small"
            isFullWidth
            variant="button"
            onClick={() => props.onClick('digiwallet')}
            color={ButtonColors.DigiWallet}
          >
            Pay with DigiWallet
          </Button>
        </li>
      </ul>
    </div>
  );
};
