import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { GetProductByUrl } from '~/domain/orders/services/get-product-by-url';

export const loader = async (args: LoaderArgs) => {
  const { url } = args.params;
  const product = await new GetProductByUrl(url!).call();
  return product.json();
};

const Product = () => {
  const data = useLoaderData<typeof loader>();

  return <div>{JSON.stringify(data)}</div>;
};

export default Product;
