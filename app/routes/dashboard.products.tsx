import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { json, redirect } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import type { UserEntity } from '~/domain/orders/entities/user';
import { GetSupplierProducts } from '~/domain/orders/services/get-supplier-products';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Breadcrumbs } from '~/ui/molecules/breadcrumbs-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/ui/atoms/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/ui/atoms/card';
import { ProductsTable } from '~/ui/organisms/products-table';

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
      </div>

      <Breadcrumbs
        items={[
          {
            label: "Dashboard",
            href: "/"
          },
          {
            label: "Products",
            href: "/products"
          },
          {
            label: "All Products",
            href: "/dashboard/products"
          }
        ]}
      />

      <Tabs defaultValue='all'>
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="draft">Draft</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <ProductsTable products={data.products} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
