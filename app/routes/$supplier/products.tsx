import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import type { UserEntity } from '~/domain/orders/entities/user';
import { GetSupplierProducts } from '~/domain/orders/services/get-supplier-products';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Page } from '~/ui/layouts/dashboard/page';
import { ProductListingItem } from '~/ui/molecules/product-listing-item';

export const meta: V2_MetaFunction = () => {
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

export const loader = async (args: LoaderArgs) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const userDTO = await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  const products = await new GetSupplierProducts('userDTO as UserEntity', userDTO as UserEntity).call();

  return json({ products: products.map((p) => p.json()) });
};

export default function ProductsPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = useLoaderData<typeof loader>();

  return (
    <Page>
      <Heading variant={HeadingVariant.H3} appearance={HeadingAppearance.Primary} className="pb-4">
        Your Products
      </Heading>

      <div className="grid grid-cols-3 gap-8">
        {data.products.map((product) => (
          <ProductListingItem key={product.id} product={product} isOwner />
        ))}
      </div>
    </Page>
  );
}
