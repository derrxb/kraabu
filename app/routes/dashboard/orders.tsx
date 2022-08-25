import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';

export const meta: MetaFunction = () => {
  return {
    title: 'Your Orders | Krabuu',
    description: 'See the status of all your orders. You can also track your order progress.',
  };
};

export const loader = async (args: LoaderArgs) => {
  let userDTO = await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  return json({ user: userDTO });
};

export default function OrdersPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Your orders</h1>
    </div>
  );
}
