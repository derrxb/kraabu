import type { MetaFunction } from '@vercel/remix';
import { SiteNav } from '~/ui/molecules/site-nav';
import { HeroFold } from '~/ui/organisms/landing-page/hero-fold';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Krabuu | Sell anything online in Belize, without the hassle',
    },
    {
      name: 'description',
      content: 'Sell anything online in Belize, without the hassle',
    },
  ];
};

export default function Index() {
  return (
    <div className="h-full w-full px-8 md:px-32">
      <SiteNav className="" />
      <HeroFold />
    </div>
  );
}
