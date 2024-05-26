import type { LoaderFunctionArgs, MetaFunction } from '@vercel/remix';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { GetOrderablePaymentLink } from '~/domain/orders/services/get-product-by-payment-link';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';
import { typedjson, useTypedLoaderData } from 'remix-typedjson';

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  try {
    const { url } = params;
    const product = await new GetOrderablePaymentLink(url as string).call();

    return typedjson(product.json());
  } catch (error) {
    throw getFormattedFailureResponse(error, request);
  }
};

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

export default function OrderByPaymentLink() {
  const data = useTypedLoaderData<typeof loader>();

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
