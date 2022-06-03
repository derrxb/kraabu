import success from '~/assets/images/success.svg';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';

export type PaymentSuccessProps = {};

export const PaymentSuccess = () => {
  return (
    <div className="my-auto flex min-h-[55vh] w-full flex-col px-8 py-4 leading-relaxed sm:h-full md:px-16 md:py-12 xl:px-32 xl:pt-32">
      <Heading variant={HeadingVariant.H2} appearance={HeadingAppearance.Primary}>
        We've successfully received payment for this order.
      </Heading>

      <p className="mb-8 text-lg text-gray-500">You can provide your invoice ID as proof of your payment.</p>

      <img src={success} alt="success" className="mx-auto w-60" />
    </div>
  );
};
