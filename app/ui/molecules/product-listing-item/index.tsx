import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { Link } from '@remix-run/react';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { getPrettyCurrency } from '~/lib/currency';
import { Image } from '~/ui/atoms/image';

export type ProductListingItemTypeProps = {
  product: ProductDTO;
  isOwner?: boolean;
};

export const ProductListingItem = ({ product, isOwner }: ProductListingItemTypeProps) => {
  return (
    <Link
      to={`/products/${product.publicUrl}`}
      key={product.id}
      className="relative w-full space-y-2 overflow-hidden rounded-md border-[1px] border-gray-200"
    >
      <Image src={product.coverImage!} alt={product.name!} className="object-contain object-center" />

      <div className="flex flex-col space-y-2 px-4 pb-4">
        <h1 className="text-lg font-medium text-gray-900">{product.name}</h1>
        <p className="text-gray-500 line-clamp-3">{product.description}</p>

        {product.price ? (
          <span className="mt-auto text-lg font-bold text-primary-4">
            {getPrettyCurrency(product.price / 100, product.currency!)}
          </span>
        ) : null}

        {!product.published && isOwner ? (
          <span className="absolute -top-2 right-0 inline-flex  items-center rounded-r-sm rounded-bl-md rounded-br-none bg-yellow-600 px-2 py-2 text-sm text-white">
            <ExclamationTriangleIcon className="mr-1 h-4 w-4" />
            Draft
          </span>
        ) : null}
      </div>
    </Link>
  );
};
