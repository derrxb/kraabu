import success from '~/assets/images/success.svg';

export type PaymentSuccessProps = {};

export const PaymentSuccess = () => {
  return (
    <div className="my-auto flex h-full w-full flex-col leading-relaxed md:px-32 md:py-20 md:pt-36">
      <h1 className="self-center pb-2 pt-5 text-3xl font-bold text-gray-800">
        Your order and payment were <span className="text-green-500">successful</span>!
      </h1>

      <p className="mb-8 text-lg text-gray-500">You can provide your invoice ID as proof of your payment.</p>

      <img src={success} alt="success" className="mx-auto w-56" />
    </div>
  );
};
