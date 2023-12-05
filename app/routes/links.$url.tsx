import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { GetOrderablePaymentLink } from '~/domain/orders/services/get-product-by-payment-link';
import { getFormattedFailureResponse } from '~/presentation/representers/http-response-failure';

export const loader = async ({ request, params }: LoaderArgs) => {
  try {
    const { url } = params;
    const product = await new GetOrderablePaymentLink(url as string).call();

    return product.json();
  } catch (error) {
    throw getFormattedFailureResponse(error, request);
  }
};

export const meta: V2_MetaFunction = ({ data }) => {
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
  const data = useLoaderData<typeof loader>();

  return <div>{JSON.stringify(data, null, 2)}</div>;
}