import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    title: 'Krabuu | Online Payments made simple',
    description: "Connect your website to Belize's various E-Wallets have never been easier.",
  };
};

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col px-4 text-left">
        <h1 className="text-6xl font-bold tracking-widest text-brand">Krabuu Checkout</h1>

        <h2 className="text-2xl font-normal tracking-wide text-slate-500">
          Connect your website with Belize's E-Wallets
        </h2>
      </div>
    </div>
  );
}
