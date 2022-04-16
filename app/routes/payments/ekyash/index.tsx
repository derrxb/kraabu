import {
  ActionFunction,
  json,
  LoaderFunction,
  MetaFunction,
  redirect,
  useLoaderData,
} from "remix";
import gigged from "~/assets/images/gigged-logo.png";
import KrabuuHeader from "~/components/krabuu-header";
import PaymentAmount from "~/components/payment-amount";
import VendorHeader from "~/components/vendor-header";
import Payment from "~/domain/payments/entities/payment";
import CompletePendingEkyashPayment from "~/domain/payments/services/complete-pending-ekyash-payment";
import RequestEkyashPaymentQrCode from "~/domain/payments/services/request-ekyash-payment-qr-code";

export const meta: MetaFunction = () => {
  return {
    title: "GiggedBZ Payment Request |  Krabuu - Easily Pay online in Belize",
  };
};

/**
 * This URL's loader function is responsible for loading a
 * pending payment request and its QR payment code.
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

export const action: ActionFunction = async ({ request }) => {
  try {
    const payment = await new CompletePendingEkyashPayment(request).call();

    return redirect(
      `https://giggedbz.arcadier.io/user/checkout/current-status?invoiceNo=${payment?.invoice}`
    );
  } catch (e) {
    return json(
      {
        message: "There was an error with completing your payment.",
      },
      404
    );
  }
};

export default function Index() {
  const data = useLoaderData() as { payment: Payment };

  return (
    <div className="h-full w-full flex items-center justify-center text-gray-800">
      <div className="my-auto leading-relaxed">
        <VendorHeader
          name="GiggedBz"
          logo={gigged}
          url="http://gigged.bz"
          description="Make life easier by hiring a Gigger to help"
        />

        <div className="flex flex-col border-[1px] container shadow-sm rounded p-4 w-[600px] min-h-[480px]">
          <h1 className="text-2xl font-medium pb-2 text-gray-900 text-center">
            Giggedbz is requesting payment for your order with E-Kyash.
          </h1>

          <PaymentAmount
            amount={data.payment.currency.amount}
            type={data.payment.currency.type}
            invoice={data.payment.invoice}
          />

          <hr className="border-2 rounded-full mb-4 w-40 self-center" />

          {data.payment.additionalData?.qrCodeUrl ? (
            <img
              src={data.payment.additionalData?.qrCodeUrl as string}
              alt="payment qr code"
              className="w-40 self-center pb-4"
            />
          ) : (
            <div className="w-full py-2 px-4 bg-red-200 rounded-md pb-4">
              <span className="text-red-700">
                Oh, no! Something unexpected happened. Don't worry, your wallet
                has not been charged.
              </span>
            </div>
          )}

          <span className="text-medium text-base pb-4 text-gray-500 text-center">
            Please scan the QR code above to make payment with your E-Kyash app.
          </span>
        </div>

        <KrabuuHeader />
      </div>
    </div>
  );
}
