import { Button, ButtonColors } from '~/ui/atoms/button';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { KrabuuTag } from '~/ui/atoms/krabuu-tag';

export type PaymentMethodSelectorProps = {
  onClick: (method: 'ekyash' | 'digiwallet') => void;
};

export const PaymentMethodSelector = (props: PaymentMethodSelectorProps) => {
  return (
    <div className="my-auto flex min-h-[55vh] w-full flex-col px-8 py-4 leading-relaxed sm:h-full md:px-16 md:py-12 xl:px-32 xl:pt-32">
      <Heading variant={HeadingVariant.H4} appearance={HeadingAppearance.UnStyled} className="mb-2">
        Confirm order by completing with one of the supported e-wallets.
      </Heading>

      <p className="mb-8 text-sm text-gray-500">Once selected we’ll send a request to your mobile app.</p>

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

      <div className="mt-auto ml-auto">
        <KrabuuTag />
      </div>
    </div>
  );
};
