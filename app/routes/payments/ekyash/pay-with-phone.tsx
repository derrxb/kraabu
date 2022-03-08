import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
  useLoaderData,
} from "remix";
import KrabuuHeader from "~/components/krabuu-header";
import PaymentAmount from "~/components/payment-amount";
import Payment from "~/domain/payments/entities/payment";
import PaymentRepository from "~/domain/payments/repositories/payment-repository";

export const meta: MetaFunction = () => {
  return {
    title: "Complete GiggedBz Booking Payment | Krabuu",
    description:
      "You're almost done with your GiggedBz booking. Once payment is completed, your booking will be confirmed.",
  };
};

export let loader: LoaderFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const invoiceNo = searchParams.get("invoiceNo");
  const paymentKey = searchParams.get("paykey");

  if (!invoiceNo || !paymentKey) {
    return json({ message: "no payment with this invoice no" }, 404);
  }

  const payment = await PaymentRepository.getPaymentByInvoice(invoiceNo);

  return json({
    alive: true,
    payment: payment,
  });
};

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  if (!formData.get("name") || !formData.get("phone")) {
    throw new Error("Email and phone are both required.");
  }

  const searchParams = new URL(request.url).searchParams;
  const invoiceNo = searchParams.get("invoiceNo");

  if (!invoiceNo) {
    return json({ message: "no payment with this invoice no" }, 404);
  }

  const payment = await PaymentRepository.getPaymentByInvoice(
    invoiceNo as string
  );
};

export const blockInvalidNumberChar = (e: any) => {
  return ["e", "E", "+"].includes(e.key) && e.preventDefault();
};

export default function EKyash() {
  const data = useLoaderData() as { payment: Payment };

  return (
    <div className="h-full w-full flex items-center justify-center text-gray-800">
      <div className="my-auto leading-relaxed">
        <KrabuuHeader />

        <div className="flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]">
          <h2 className="text-xl font-medium pb-4 text-gray-900">
            GiggedBz is requesting payment for your order using the EKyash
            digital wallet.
          </h2>

          <PaymentAmount
            type={data.payment.currency.type}
            invoice={data.payment.invoice}
            amount={data.payment.currency.amount}
          />

          <span className="text-gray-500 pb-4">
            Please enter your phone number linked to your EKyash account in
            order to receive your payment request.
          </span>

          <Form action="/payments/ekyash" method="post" className="mb-4">
            <div className="flex flex-col pb-4">
              <label htmlFor="name" className="font-medium text-gray-600">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="text-xl focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 font-normal border-gray-300 rounded-md py-2"
                placeholder="i.e. John Doe"
              />
            </div>

            <div className="flex flex-col pb-4">
              <label htmlFor="phone" className="font-medium text-gray-600">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="text-xl focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 font-normal border-gray-300 rounded-md py-2"
                placeholder="i.e. 501-621-1234"
                onKeyDown={blockInvalidNumberChar}
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-xl border-2 rounded-md focus:ring focus:ring-indigo-100 border-indigo-500 bg-indigo-600 text-white"
            >
              Get Payment Request
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
