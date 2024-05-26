import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { redirect } from '@remix-run/node';
import { Form, useActionData, useNavigate, useNavigation } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import { CreateProduct } from '~/domain/orders/services/create-product';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { InputField } from '~/ui/atoms/input-field-deprecated';
import { ErrorResponse } from '~/utils/error-response';
import { Krabuu } from '~/ui/atoms/krabuu';
import { Breadcrumbs } from '~/ui/molecules/breadcrumbs-list';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/ui/atoms/card';
import { Button } from '~/ui/atoms/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/ui/atoms/Select';
import { Label } from '~/ui/atoms/label';
import { typedjson } from 'remix-typedjson';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Create Product | Add your product details',
    },
    {
      name: 'description',
      content: '',
    },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  return typedjson({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  try {
    const user = await authenticator.isAuthenticated(request, { failureRedirect: '/login' });
    const product = await new CreateProduct(formData, user!).call();
    return redirect(`/products/${product?.publicUrl}`);
  } catch (error) {
    return await new ErrorResponse(error).call(formData);
  }
};

export default function ProductNew() {
  const actionData = useActionData<typeof action>();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="flex flex-col space-y-4 px-4 md:px-0">
      <Krabuu size="large" isLink />
      <Breadcrumbs
        items={[
          {
            label: 'Dashboard',
            href: '/',
          },
          {
            label: 'Products',
            href: '/products',
          },
          {
            label: 'Create',
            href: `/products/new`,
          },
        ]}
      />

      <Form action={`/products/new`} method="post" className="mx-auto w-full max-w-5xl grid flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H1}>
            Create a product
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
                      defaultValue={actionData?.values.name}
                      errorMessage={actionData?.errors.name}
                    />

                    <InputField
                      disabled={isSubmitting}
                      className="grid gap-3"
                      name="publicUrl"
                      label="Slug"
                      type="text"
                      defaultValue={actionData?.values.publicUrl}
                      errorMessage={actionData?.errors.publicUrl}
                    />

                    <InputField
                      disabled={isSubmitting}
                      className="grid gap-3"
                      name="description"
                      label="Description"
                      type="text"
                      defaultValue={actionData?.values.description}
                      errorMessage={actionData?.errors.description}
                    />

                    <div className="flex gap-2">
                      <InputField
                        name="currency"
                        label="Currency"
                        defaultValue={actionData?.values.currency}
                        errorMessage={actionData?.errors.currency}
                      />

                      <InputField
                        name="price"
                        label="Price"
                        defaultValue={actionData?.values.price}
                        errorMessage={actionData?.errors.price}
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
                      <Select defaultValue="draft">
                        <SelectTrigger id="status" aria-label="Select status">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
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
