import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';

export const meta: MetaFunction = () => {
  return {
    title: 'Your Products | Krabuu',
    description: 'See the status of all your products.',
  };
};

export const loader = async (args: LoaderArgs) => {
  let userDTO = await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  return json({ user: userDTO });
};

export default function ProductsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Your products</h1>
      <Link to="/products/new">Create a product</Link>
    </div>
  );
}
