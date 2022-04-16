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
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="flex flex-col text-left px-4">
        <h1 className="font-bold text-6xl tracking-widest text-indigo-600">
          Krabuu Checkout
        </h1>

        <h2 className="font-bold text-3xl text-gray-600 tracking-wide">
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
