import type { MetaFunction } from 'remix';
import { SiteNav } from '~/ui/molecules/site-nav';
import { HeroFold } from '~/ui/organisms/landing-page/hero-fold';
import { HeroRemembered } from '~/ui/organisms/landing-page/hero-remembered';
import { HeroSecurity } from '~/ui/organisms/landing-page/hero-security';
import { HeroSpeed } from '~/ui/organisms/landing-page/hero-speed';
import { Newsletter } from '~/ui/organisms/landing-page/newsletter';

export const meta: MetaFunction = () => {
  return {
    title: 'Krabuu | Online Payments made simple',
    description: 'Sell anything online in Belize, without the hassle',
  };
};

export default function Index() {
  return (
    <div className="h-full w-full">
      <SiteNav className="" />
      <HeroFold />
      <HeroSpeed />
      <HeroSecurity />
      <HeroRemembered />
      <Newsletter />
    </div>
  );
}
