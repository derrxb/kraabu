import type { ActionArgs, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useTransition } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import { CreateProduct } from '~/domain/orders/services/create-product';
import { Button } from '~/ui/atoms/button';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Input } from '~/ui/atoms/input';
import { Page } from '~/ui/layouts/dashboard/page';
import { ErrorResponse } from '~/utils/error-response';

export const meta: MetaFunction = () => {
  return {
    title: 'Create Product | Add your product details',
    description: '',
  };
};

export const loader = async (args: LoaderArgs) => {
  await authenticator.isAuthenticated(args.request, {
    failureRedirect: `/login?redirectTo=${new URL(args.request.url).pathname}`,
  });

  return json({});
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();

  try {
    const user = await authenticator.isAuthenticated(request, { failureRedirect: '/login' });
    const product = await new CreateProduct(formData, user!).call();
    return redirect(`/projects/${product?.id}`);
  } catch (error) {
    return await new ErrorResponse(error).call(formData);
  }
};

export default function ProductNew() {
  const transition = useTransition();
  const actionData = useActionData<typeof action>();

  return (
    <Page>
      <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H3}>
        Create a new product
      </Heading>

      <Form method="post" action="/products/new" className="max-w-[640px]">
        <Input
          autoFocus
          name="name"
          label="Name"
          defaultValue={actionData?.values.name}
          errorMessage={actionData?.errors.name}
          disabled={transition.state === 'submitting'}
        />

        <Input
          name="description"
          label="Description"
          defaultValue={actionData?.values.description}
          errorMessage={actionData?.errors.description}
          disabled={transition.state === 'submitting'}
        />

        <Input
          name="price"
          label="Price"
          defaultValue={actionData?.values.price}
          errorMessage={actionData?.errors.price}
          disabled={transition.state === 'submitting'}
        />

        <Input
          name="publicUrl"
          label="Short URL"
          defaultValue={actionData?.values.publicUrl}
          errorMessage={actionData?.errors.publicUrl}
          disabled={transition.state === 'submitting'}
        />

        <Button disabled={transition.state === 'submitting'} variant="submit" isFullWidth>
          Create
        </Button>
      </Form>
    </Page>
  );
}
