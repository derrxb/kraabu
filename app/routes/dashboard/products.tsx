import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Page } from '~/ui/layouts/dashboard/page';

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
    <Page>
      <Heading variant={HeadingVariant.H3} appearance={HeadingAppearance.Primary}>
        Your Products
      </Heading>

      <Link to="/products/new">Create a product</Link>
    </Page>
  );
}
