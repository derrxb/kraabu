import axios from "axios";
import React from "react";
import {
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
  useSubmit,
} from "remix";
import gigged from "~/assets/images/gigged-logo.png";
import PayOnline from "~/assets/images/undraw-pay-online.svg";
import KrabuuHeader from "~/components/krabuu-header";
import VendorHeader from "~/components/vendor-header";
import Payment, { PaymentStatus } from "~/domain/payments/entities/payment";
import GetGiggedBzPayment from "~/domain/payments/services/ekaysh/get-gigged-bz-payment";

export const meta: MetaFunction = () => {
  return {
    title: "GiggedBZ Payment Request |  Krabuu - Easily Pay online in Belize",
  };
};

/**
 * This URL's loader function is responsible for loading a
 * pending payment request and its QR payment code.
 * NOTE: We need this to get values as query strings because we don't control how arcadier calls this endpoint.
 * @returns The page data
 */
export const loader: LoaderFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const payment = await new GetGiggedBzPayment(searchParams).call();

  return json({
    payment: payment,
  });
};

const setIntervalAsync = (
  timer: NodeJS.Timeout | null,
  fn: any,
  ms: number
) => {
  fn().then(() => {
    timer = setTimeout(() => setIntervalAsync(timer, fn, ms), ms);
  });
};

export default function Index() {
  const data = useLoaderData() as { payment: Payment };
  const [paymentStatus, setPaymentStatus] =
    React.useState<PaymentStatus | null>(null);

  const submit = useSubmit();
  React.useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    setIntervalAsync(
      timer,
      async () => {
        const result = await axios.get(
          `/payments/ekyash/${data.payment.invoice}/status`
        );

        if (result.data?.status === PaymentStatus.Completed) {
          submit(null, {
            method: "post",
            action: `/payments/ekyash/${data.payment.invoice}/completed`,
          });
          return;
        }
      },
      1500
    );

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [paymentStatus]);

  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="flex h-full flex-col bg-slate-100 px-12 md:w-1/2 md:px-32 md:py-10">
        <div className="pb-8">
          <VendorHeader
            name="GiggedBz"
            logo={gigged}
            url="http://gigged.bz"
            description="Make life easier by hiring a Gigger to help"
          />
        </div>

        <img src={PayOnline} className="mb-8 w-[280px]" />

        <span className="mb-2 text-sm uppercase text-gray-500">
          Order Details
        </span>

        <h2 className="text-lg font-medium text-gray-800">
          Custom 10 pages website development
        </h2>

        <div className="flex flex-row items-end ">
          <span className="mr-2 text-2xl font-bold text-indigo-500">
            ${data.payment.currency.amount}
          </span>

          <span className="text-xl font-medium text-indigo-400">
            {data.payment.currency.type}
          </span>
        </div>

        <div className="mt-auto">
          <KrabuuHeader />
        </div>
      </div>

      <div className="my-auto flex h-full flex-col leading-relaxed md:w-1/2 md:px-32 md:py-20 md:pt-36">
        <h1 className="pb-2 pt-5 text-3xl font-bold text-gray-800">
          Confirm your order by completing payment with your EKyash App.
        </h1>

        <span className="text-medium pb-16 text-base text-gray-500">
          Scan the QR code to complete payment with your E-Kyash app.
        </span>

        {data.payment.additionalData?.qrCodeUrl ? (
          <img
            src={data.payment.additionalData?.qrCodeUrl as string}
            alt="payment qr code"
            className="-m-[14px] h-72 w-72 self-center"
          />
        ) : (
          <div className="w-full rounded-md bg-red-200 py-2 px-4 pb-4">
            <span className="text-red-700">
              Oh, no! Something unexpected happened. Don't worry, your wallet
              has not been charged.
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
