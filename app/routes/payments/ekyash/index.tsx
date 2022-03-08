import { json, LoaderFunction, useLoaderData } from "remix";
import KrabuuHeader from "~/components/krabuu-header";
import PaymentAmount from "~/components/payment-amount";
import Payment from "~/domain/payments/entities/payment";
import RequestEkyashPaymentQrCode from "~/domain/payments/services/request-ekyash-payment-qr-code";

export let loader: LoaderFunction = async ({ request }) => {
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

export default function Index() {
  const data = useLoaderData() as { payment: Payment };

  return (
    <div className="h-full w-full flex items-center justify-center text-gray-800">
      <div className="my-auto leading-relaxed">
        <KrabuuHeader />

        <div className="flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]">
          <h1 className="text-xl font-medium pb-2 text-gray-900">
            GiggedBz is requesting payment for your order with EKyash.
          </h1>

          <PaymentAmount
            amount={data.payment.currency.amount}
            type={data.payment.currency.type}
            invoice={data.payment.invoice}
          />

          <span className="text-medium text-base pb-4 text-gray-500">
            Please scan the QR code to make payment with your EKyash app.
          </span>

          {data.payment.additionalData?.qrCodeUrl ? (
            <img
              src={data.payment.additionalData?.qrCodeUrl as string}
              alt="payment qr code"
            />
          ) : (
            <div className="w-full py-2 px-4 bg-red-200 rounded-md">
              <span className="text-red-700">
                Oh, no! Something unexpected happened. Don't worry, your wallet
                has not been charged.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
