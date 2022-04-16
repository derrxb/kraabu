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
import RequestEkyashPaymentQrCode from "~/domain/payments/services/request-ekyash-payment-qr-code";

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
  const invoiceNo = searchParams.get("invoiceNo");
  const paymentKey = searchParams.get("paykey");

  if (!invoiceNo || !paymentKey) {
    return json({ message: "no payment with this invoice no" }, 404);
  }

  const payment = await new RequestEkyashPaymentQrCode(
    invoiceNo,
    paymentKey
  ).call();

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
    <div className="h-full w-full flex md:flex-row text-gray-800">
      <div className="flex flex-col md:w-1/2 md:px-32 h-full px-4 md:py-10 bg-slate-100">
        <div className="pb-8">
          <VendorHeader
            name="GiggedBz"
            logo={gigged}
            url="http://gigged.bz"
            description="Make life easier by hiring a Gigger to help"
          />
        </div>

        <span className="text-sm uppercase text-gray-500 mb-2">
          Order Details
        </span>

        <h2 className="text-lg font-medium text-gray-800">
          Custom 10 pages website development
        </h2>

        <div className="flex flex-row items-end ">
          <span className="text-2xl font-bold text-indigo-500 mr-2">
            ${data.payment.currency.amount}
          </span>

          <span className="text-xl font-medium text-indigo-400">
            {data.payment.currency.type}
          </span>
        </div>

        <div className="w-[300px] rounded-lg bg-white py-8 justify-center my-auto">
          <img src={PayOnline} className="w-[280px]" />
        </div>

        <div className="mt-auto">
          <KrabuuHeader />
        </div>
      </div>

      <div className="flex flex-col h-full md:w-1/2 my-auto leading-relaxed md:px-32 md:py-20 md:pt-36">
        <h1 className="font-bold text-3xl pb-2 text-gray-800 pt-5">
          Confirm your order by completing payment with your EKyash App.
        </h1>

        <span className="text-medium text-base pb-16 text-gray-500">
          Scan the QR code to complete payment with your E-Kyash app.
        </span>

        {data.payment.additionalData?.qrCodeUrl ? (
          <img
            src={data.payment.additionalData?.qrCodeUrl as string}
            alt="payment qr code"
            className="w-72 h-72 -m-[14px] self-center"
          />
        ) : (
          <div className="w-full py-2 px-4 bg-red-200 rounded-md pb-4">
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
