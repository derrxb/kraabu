import { Link } from '@remix-run/react';
import { truncate } from 'lodash';
import type { ProductDTO } from '~/domain/orders/entities/product';

export type ProductListingItemType = {
  product: ProductDTO;
  isOwner?: boolean;
};

export const ProductListingItem = ({ product, isOwner }: ProductListingItemType) => {
  return (
    <Link
      to={`/products/${product.publicUrl}`}
      key={product.id}
      className="max-w-[320px] rounded-md border-[1px] border-gray-100 p-4 shadow-md"
    >
      <h1 className="font-bold text-gray-900">{product.name}</h1>
      <p className="text-gray-600">{truncate(product.description, { length: 75 })}</p>

      {!product.published && isOwner ? (
        <span className="rounded-full bg-yellow-600 px-2 py-1 text-sm text-white">Draft</span>
      ) : null}
    </Link>
  );
};
