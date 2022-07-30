import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { authenticator } from '~/auth.server';
import { UserRepository } from '~/domain/orders/repositories/user-repository';
import { SiteNav } from '~/ui/molecules/site-nav';

export const meta: MetaFunction = () => {
  return {
    title: 'Krabuu | Sell anything online in Belize, without the hassle',
    description: 'Sell anything online in Belize, without the hassle',
  };
};

export const loader = async (args: LoaderArgs) => {
  // get the user data or redirect to /login if it failed
  let userDTO = await authenticator.isAuthenticated(args.request, { failureRedirect: '/login' });
  const user = await UserRepository.findByUserId(userDTO?.id as number);

  return json({ user: user?.json() });
};

export default function Dashboard() {
  return (
    <div className="h-full w-full">
      <SiteNav className="" />
    </div>
  );
}
