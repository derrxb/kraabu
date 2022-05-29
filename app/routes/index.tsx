import type { MetaFunction } from 'remix';
import { SiteNav } from '~/ui/molecules/site-nav';
import { HeroFold } from '~/ui/organisms/landing-page/hero-fold';
import { HeroSecurity } from '~/ui/organisms/landing-page/hero-security';
import { HeroSpeed } from '~/ui/organisms/landing-page/hero-speed';

export const meta: MetaFunction = () => {
  return {
    title: 'Krabuu | Online Payments made simple',
    description: "Connect your website to Belize's various E-Wallets have never been easier.",
  };
};

export default function Index() {
  return (
    <div className="h-full w-full">
      <SiteNav className="" />

      <HeroFold />
      <HeroSpeed />
      <HeroSecurity />
    </div>
  );
}
