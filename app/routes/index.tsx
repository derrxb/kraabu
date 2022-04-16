import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Krabuu | Online Payments made simple",
    description:
      "Connecting your website to Belize's various E-Wallets have never been easier.",
  };
};

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col px-4 text-left">
        <h1 className="text-6xl font-bold tracking-widest text-indigo-600">
          Krabuu Checkout
        </h1>

        <h2 className="text-3xl font-bold tracking-wide text-gray-600">
          Online Payments in Belize made simple
        </h2>
      </div>

      <div>
        {/* <p>
          We build Krabuu Checkout so that you don't have to. Easily accept
          payments with Belize's popular E-wallets!
        </p> */}
      </div>
    </div>
  );
}
