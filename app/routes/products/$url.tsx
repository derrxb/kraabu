import type { LoaderArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { GetProductByUrl } from '~/domain/orders/services/get-product-by-url';

export const meta: MetaFunction = ({ data }) => {
  const product = data as ProductDTO;

  return {
    title: `${product.name} by ${product.user?.businessName} | Krabuu`,
    description: product.description,
  };
};

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
