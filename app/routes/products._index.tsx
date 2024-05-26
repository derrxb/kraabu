import { redirect } from '@remix-run/node';
import { Link, useNavigate } from '@remix-run/react';
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import capitalize from 'lodash/capitalize';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';
import { authenticator } from '~/auth.server';
import type { UserEntity } from '~/domain/orders/entities/user';
import { GetSupplierProducts } from '~/domain/orders/services/get-supplier-products';
import { Button } from '~/ui/atoms/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/ui/atoms/card';
import { Krabuu } from '~/ui/atoms/krabuu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/ui/atoms/tabs';
import { Breadcrumbs } from '~/ui/molecules/breadcrumbs-list';
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

  const { searchParams } = new URL(args.request.url);
  const products = await new GetSupplierProducts(userDTO.username!, userDTO as UserEntity, searchParams).call();

  return typedjson({ products: products.map((p) => p.json()), user: userDTO });
};

export default function ProductsPage() {
  const data = useTypedLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-4 px-4 md:px-0">
      <Krabuu size="large" isLink />

      <Breadcrumbs
        items={[
          {
            label: `${capitalize(data.user?.businessName)}`,
            href: `/${data.user?.username}`,
          },
          {
            label: 'Products',
            href: '/products',
          },
        ]}
      />

      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all" onClick={() => navigate(`/products?status=all`)}>
              All
            </TabsTrigger>
            <TabsTrigger value="active" onClick={() => navigate('/products?status=active')}>
              Active
            </TabsTrigger>
            <TabsTrigger value="draft" onClick={() => navigate('/products?status=draft')}>
              Draft
            </TabsTrigger>
          </TabsList>

          <Button size="sm" className="ml-auto" asChild>
            <Link to="/products/new">Add Product</Link>
          </Button>
        </div>

        <Card className="my-4">
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your products and view their sales performance.</CardDescription>
          </CardHeader>

          <CardContent>
            <TabsContent value="all">
              <ProductsTable products={data.products} />
            </TabsContent>

            <TabsContent value="active">
              <ProductsTable products={data.products} />
            </TabsContent>

            <TabsContent value="draft">
              <ProductsTable products={data.products} />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
