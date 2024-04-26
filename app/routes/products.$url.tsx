import { HeartIcon } from '@radix-ui/react-icons';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import capitalize from 'lodash/capitalize';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { GetProductByUrl } from '~/domain/orders/services/get-product-by-url';
import { getPrettyCurrency } from '~/lib/currency';
import { Button } from '~/ui/atoms/button';
import { Heading, HeadingAppearance, HeadingVariant } from '~/ui/atoms/heading';
import { Krabuu } from '~/ui/atoms/krabuu';
import { Breadcrumbs } from '~/ui/molecules/breadcrumbs-list';

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
    <div className="flex flex-col space-y-4 px-4 md:px-0">
      <Krabuu size="large" isLink />
      <Breadcrumbs
        items={[
          {
            label: `${capitalize(data.user?.businessName)}`,
            href: `/${data.user?.username}`,
          },
          {
            label: `Products`,
            href: `/${data.user?.username}/products`,
          },
          {
            label: data.name || 'Untitled Product',
            href: `/products/${data.publicUrl}`,
          },
        ]}
      />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <img
          src={data.coverImage}
          alt="product"
          className="mx-auto aspect-video h-[420px] w-full rounded-lg object-cover object-center md:h-[520px] md:w-[480px]"
        />

        <div className="flex flex-col space-y-2 pt-4 md:pt-0">
          <Heading appearance={HeadingAppearance.Primary} variant={HeadingVariant.H4} as="h1">
            {data.name}
          </Heading>

          <span className="text-2xl">{getPrettyCurrency(data.price! / 100, data.currency!)}</span>
          <span className="text-base text-gray-600">{data.description}</span>

          <div className="flex items-center w-full gap-2">
            <Button variant="default" className="w-5/6">
              Buy now
            </Button>

            <Button variant="link" className="w-1/6 hover:bg-gray-100 max-w-14">
              <HeartIcon className="h-5 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
