import type { ActionFunctionArgs, LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { json, redirect } from '@remix-run/node';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { authenticator } from '~/auth.server';
import { CreateProduct } from '~/domain/orders/services/create-product';
import { Button } from '~/ui/atoms/button-deprecated';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { InputField } from '~/ui/atoms/input-field-deprecated';
import { Page } from '~/ui/layouts/dashboard/page';
import { ErrorResponse } from '~/utils/error-response';

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

  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
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
  const transition = useNavigation();
  const actionData = useActionData<typeof action>();

  return (
    <Page>
      <Form method="POST" action="/products/new" className="m-auto max-w-[640px]">
        <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H3}>
          Create a new product
        </Heading>

        <InputField
          isFullWidth
          autoFocus
          name="name"
          label="Name"
          defaultValue={actionData?.values.name}
          errorMessage={actionData?.errors.name}
          disabled={transition.state === 'submitting'}
        />

        <InputField
          isFullWidth
          name="description"
          label="Description"
          defaultValue={actionData?.values.description}
          errorMessage={actionData?.errors.description}
          disabled={transition.state === 'submitting'}
        />

        <InputField
          isFullWidth
          name="price"
          label="Price"
          defaultValue={actionData?.values.price}
          errorMessage={actionData?.errors.price}
          disabled={transition.state === 'submitting'}
        />

        <InputField
          isFullWidth
          name="publicUrl"
          label="Short URL"
          defaultValue={actionData?.values.publicUrl}
          errorMessage={actionData?.errors.publicUrl}
          disabled={transition.state === 'submitting'}
        />

        <InputField
          isFullWidth
          name="thumbnailImage"
          label="Thumbnail Image"
          defaultValue="thumbnail"
          wrapperClassName="hidden"
          className="hidden"
          errorMessage={actionData?.errors.thumbnailImage}
          disabled={transition.state === 'submitting'}
        />

        <InputField
          isFullWidth
          name="coverImage"
          label="Cover Image"
          defaultValue="thumbnail"
          wrapperClassName="hidden"
          className="hidden"
          errorMessage={actionData?.errors.coverImage}
          disabled={transition.state === 'submitting'}
        />

        <InputField
          isFullWidth
          name="currency"
          label="Currency"
          defaultValue="USD"
          wrapperClassName="hidden"
          className="hidden"
          errorMessage={actionData?.errors.currency}
          disabled={transition.state === 'submitting'}
        />

        <Button disabled={transition.state === 'submitting'} variant="submit" isFullWidth>
          Create
        </Button>
      </Form>
    </Page>
  );
}
