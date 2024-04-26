import { Form, useLoaderData, useNavigate, useNavigation } from '@remix-run/react';
import { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction, redirect } from '@vercel/remix';
import React from 'react';
import { authenticator } from '~/auth.server';
import { EditProduct } from '~/domain/orders/services/edit-product';
import { GetProductByUrl } from '~/domain/orders/services/get-product-by-url';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/ui/atoms/Select';
import { Button } from '~/ui/atoms/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/ui/atoms/card';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { InputField } from '~/ui/atoms/input-field-deprecated';
import { Krabuu } from '~/ui/atoms/krabuu';
import { Label } from '~/ui/atoms/label';
import { Breadcrumbs } from '~/ui/molecules/breadcrumbs-list';
import capitalize from 'lodash/capitalize';

export const loader = async (args: LoaderFunctionArgs) => {
  const { url } = args.params;
  const userDTO = await authenticator.isAuthenticated(args.request, { failureRedirect: '/login' });
  const product = await new GetProductByUrl(url!).call();

  if (userDTO?.id !== product.userId) {
    throw redirect('/');
  }

  return {
    product: product.json(),
    user: userDTO,
  };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    {
      title: `Edit ${data?.product.name} | Krabuu`,
    },
    {
      name: 'description',
      content: data?.product.description,
    },
  ];
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const { url } = params;
  const userDTO = await authenticator.isAuthenticated(request, { failureRedirect: '/login' });
  const product = await new GetProductByUrl(url!).call();

  if (userDTO?.id !== product.userId) {
    throw redirect('/', 404);
  }

  const body = await request.formData();
  body.set('currency', product.currency!.toString());
  const result = await new EditProduct(body, userDTO!, product.id!).call();

  return redirect(`/products/${result?.publicUrl}`, 301);
};

export default function ProductEditPage() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const [published, setPublished] = React.useState(data.product.published ? 'published' : 'draft');

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
            href: `/${data.user?.username}`,
          },
          {
            label: data.product.name || 'Your Product',
            href: `/products/${data.product.publicUrl}`,
          },
          {
            label: 'Edit',
            href: `/products/${data.product.publicUrl}/edit`,
          },
        ]}
      />

      <Form
        action={`/products/${data.product.publicUrl}/edit`}
        method="post"
        className="mx-auto w-full max-w-5xl grid flex-1 auto-rows-max gap-4"
      >
        <div className="flex items-center gap-4">
          <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H1}>
            {data.product.name}
          </Heading>

          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => navigate('/products')}
              disabled={isSubmitting}
            >
              Discard
            </Button>
            <Button type="submit" size="sm" disabled={isSubmitting}>
              Save Product
            </Button>
          </div>
        </div>

        <div>
          <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
              <Card x-chunk="details">
                <CardHeader>
                  <CardTitle>Product Details</CardTitle>
                  <CardDescription>Tell your customers the details about this product.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <InputField
                      disabled={isSubmitting}
                      className="grid gap-3"
                      name="name"
                      label="Name"
                      type="text"
                      defaultValue={data.product.name}
                    />

                    <InputField
                      disabled={isSubmitting}
                      className="grid gap-3"
                      name="publicUrl"
                      label="Slug"
                      type="text"
                      defaultValue={data.product.publicUrl}
                    />

                    <InputField
                      disabled={isSubmitting}
                      className="grid gap-3"
                      name="description"
                      label="Description"
                      type="text"
                      defaultValue={data.product.description}
                    />

                    <div className="flex gap-2">
                      <InputField name="currency" label="Currency" defaultValue={data.product.currency} />
                      <InputField
                        name="price"
                        label="Price"
                        defaultValue={data.product.price}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Status</CardTitle>
                  <CardDescription>Is this product ready for publishing?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="grid gap-3">
                      <Label htmlFor="category">Status</Label>
                      <input hidden value={published} name="published" />
                      <Select
                        onValueChange={(selected) => setPublished(selected)}
                        defaultValue={data.product.published ? 'published' : 'draft'}
                        name="published"
                      >
                        <SelectTrigger id="category" aria-label="Select status" name="published">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delete Product</CardTitle>
                  <CardDescription>This action cannot be undone</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive">Delete Product</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => navigate('/products')}
            disabled={isSubmitting}
          >
            Discard
          </Button>
          <Button type="submit" size="sm" disabled={isSubmitting}>
            Save Product
          </Button>
        </div>
      </Form>
    </div>
  );
}
