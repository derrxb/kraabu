import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { json, redirect } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import type { UserEntity } from '~/domain/orders/entities/user';
import { GetSupplierProducts } from '~/domain/orders/services/get-supplier-products';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { ProductListingItem } from '~/ui/molecules/product-listing-item';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Your Products | Krabuu',
    },
    {
      name: 'description',
      content: 'See the status of all your products.',
    },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  const userDTO = await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  if (!userDTO?.username) {
    throw redirect('/');
  }

  const products = await new GetSupplierProducts(userDTO.username!, userDTO as UserEntity).call();

  return json({ products: products.map((p) => p.json()) });
};

export default function ProductsPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col space-y-4 px-8 py-8">
      <div className="flex items-center justify-between">
        <Heading variant={HeadingVariant.H3} appearance={HeadingAppearance.Primary}>
          Your Products
        </Heading>

        <Link to="/products/new">Create a product</Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.products.map((product) => (
          <ProductListingItem key={product.id} product={product} isOwner />
        ))}
      </div>
    </div>
  );
}
