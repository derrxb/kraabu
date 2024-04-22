import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import { Link, useLoaderData } from '@remix-run/react';
import capitalize from 'lodash/capitalize';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { GetProductByUrl } from '~/domain/orders/services/get-product-by-url';
import { Avatar } from '~/ui/atoms/avatar';
import { Button, ButtonColors } from '~/ui/atoms/button-deprecated';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Page } from '~/ui/layouts/dashboard/page';

export const meta: MetaFunction = ({ data }) => {
  const product = data as ProductDTO;

  return [
    {
      title: `${product.name} by ${product.user?.businessName} | Krabuu`,
    },
    {
      name: 'description',
      content: product.description,
    },
  ];
};

export const loader = async (args: LoaderFunctionArgs) => {
  const { url } = args.params;
  const product = await new GetProductByUrl(url!).call();
  return product.json();
};

const Product = () => {
  const data = useLoaderData<typeof loader>();

  return (
    <Page hasTopNav>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <img
          src={data.coverImage}
          alt="product"
          className="mx-auto aspect-video h-[480px] w-full rounded-lg object-cover object-center md:h-[560px] md:w-[480px]"
        />

        <div className="flex flex-col space-y-2">
          <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H2}>
            {data.name}
          </Heading>

          <Link to={`/business/${data.user?.id}`}>
            <span className="mr-1 text-gray-500">by</span>
            <Avatar src={data.user?.logoUrl!} fallback={data.user?.businessName?.slice(0, 2) ?? ""} />

            <span className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
              {capitalize(data.user?.businessName)}
            </span>
          </Link>

          <span className="text-lg text-gray-900">{data.description}</span>

          <Button variant="button" isFullWidth color={ButtonColors.Primary}>
            Buy now
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default Product;
