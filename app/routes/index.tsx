import type { MetaFunction } from '@remix-run/node';
import { SiteNav } from '~/ui/molecules/site-nav';
import { HeroFold } from '~/ui/organisms/landing-page/hero-fold';
import { Newsletter } from '~/ui/organisms/landing-page/newsletter';

export const meta: MetaFunction = () => {
  return {
    title: 'Krabuu | Sell anything online in Belize, without the hassle',
    description: 'Sell anything online in Belize, without the hassle',
  };
};

export default function Index() {
  return (
    <div className="h-full w-full">
      <SiteNav className="" />
      <HeroFold />
      <Newsletter />
    </div>
  );
}
