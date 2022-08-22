import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import { SiteNav } from '~/ui/molecules/site-nav';

export const meta: MetaFunction = () => {
  return {
    title: 'Create Product | Add your product details',
    description: '',
  };
};

export const loader = async (args: LoaderArgs) => {
  let userDTO = await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  return json({ user: userDTO });
};

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="h-full w-full">
      <SiteNav />
      <h1>New Product</h1>
      {JSON.stringify(data.user)}
    </div>
  );
}
