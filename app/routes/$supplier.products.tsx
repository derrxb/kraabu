import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { authenticator } from '~/auth.server';
import type { UserEntity } from '~/domain/orders/entities/user';
import { GetSupplierProducts } from '~/domain/orders/services/get-supplier-products';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Page } from '~/ui/layouts/dashboard/page';
import { ProductListingItem } from '~/ui/molecules/product-listing-item';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const userDTO = await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });
  const url = new URL(args.request.url);

  const products = await new GetSupplierProducts(
    'userDTO as UserEntity',
    userDTO as UserEntity,
    url.searchParams,
  ).call();

  return typedjson({ products: products.map((p) => p.json()) });
};

export default function ProductsPage() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const data = useTypedLoaderData<typeof loader>();

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
