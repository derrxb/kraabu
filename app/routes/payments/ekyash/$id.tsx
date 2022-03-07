import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  MetaFunction,
} from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Complete GiggedBz Booking Payment | Krabuu",
    description:
      "You're almost done with your GiggedBz booking. Once payment is completed, your booking will be confirmed.",
  };
};

export let loader: LoaderFunction = async ({ params }) => {
  // Load payment information from GiggedBz

  return json({
    alive: true,
  });
};

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  if (!formData.get("name") || !formData.get("phone")) {
    throw new Error("Email and phone are both required.");
  }

  // create payment request to EKyash
};

export default function EKyash() {
  return (
    <div className="h-full w-full flex items-center justify-center text-gray-800">
      <div className="my-auto leading-relaxed">
        <div className="flex flex-col pb-4 opacity-75 hover:opacity-100">
          <h1 className="text-3xl font-bold">Krabuu</h1>
          <span className="text-gray-600">
            Pay online with Belize's various digital wallets
          </span>
        </div>

        <div className="flex flex-col border-[1px] container shadow-md rounded p-4 w-[560px] min-h-[480px]">
          <h2 className="text-xl font-medium pb-2">
            Requesting payment with EKyash on behalf of GiggedBz
          </h2>

          <span className="text-gray-600 pb-4">
            Please enter your EKyash ID (your phone number) to receive a payment
            request for your GiggedBz booking. Once you complete payment with
            EKyash, your booking will be confirmed.
          </span>

          <Form action="/payments/ekyash" method="post" className="mb-4">
            <div className="flex flex-col pb-4">
              <label htmlFor="name" className="font-medium">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="i.e. John Doe"
              />
            </div>

            <div className="flex flex-col pb-4">
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="focus:ring-indigo-500 focus:border-indigo-500 block border-2 w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="i.e. 501-621-2131"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-xl border-2 rounded-md focus:ring focus:ring-blue-100 border-blue-400 bg-blue-600 text-white"
            >
              Get Payment Request
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
