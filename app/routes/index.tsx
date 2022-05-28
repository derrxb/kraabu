import type { MetaFunction } from 'remix';
import { SiteNav } from '~/ui/molecules/site-nav';
import { HeroFold } from '~/ui/organisms/landing-page/hero-fold';

export const meta: MetaFunction = () => {
  return {
    title: 'Krabuu | Online Payments made simple',
    description: "Connect your website to Belize's various E-Wallets have never been easier.",
  };
};

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col">
      <SiteNav className="" />

      <HeroFold />
    </div>
  );
}
