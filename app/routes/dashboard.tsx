import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { authenticator } from '~/auth.server';
import { UserRepository } from '~/domain/orders/repositories/user-repository';
import { Dashboard } from '~/ui/layouts/dashboard';

export const meta: V2_MetaFunction = () => {
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

export const loader = async (args: LoaderArgs) => {
  // get the user data or redirect to /login if it failed
  const userDTO = await authenticator.isAuthenticated(args.request, { failureRedirect: '/login' });
  const user = await UserRepository.findByUserId(userDTO?.id as number);

  return json({ user: user?.json() });
};

export default function DashboardPage() {
  return <Dashboard />;
}
