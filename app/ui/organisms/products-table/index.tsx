import { Link } from '@remix-run/react';
import { createColumnHelper, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react';
import type { ProductDTO } from '~/domain/orders/entities/product';
import { getPrettyCurrency } from '~/lib/currency';
import { Badge } from '~/ui/atoms/badge';
import { Image } from '~/ui/atoms/image';
import { DataGrid } from '~/ui/molecules/data-grid';

export type ProductsTableProps = {
  products: ProductDTO[];
};

const columnHelper = createColumnHelper<ProductDTO>();

export const ProductsTable = ({ products }: ProductsTableProps) => {
  const columns = React.useMemo(
    () => [
      columnHelper.accessor('coverImage', {
        header: () => 'Preview',
        cell: (info) => (
          <Image
            src={info.getValue()}
            alt={info.row.original.name}
            className="object-contain object-center min-h-20 max-h-20"
          />
        ),
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => (
          <div className="max-w-4xl">
            <Link to={`/products/${info.row.original.publicUrl}`}>{info.getValue()}</Link>
            <span className="line-clamp-2 text-sm text-gray-500">{info.row.original.description}</span>
          </div>
        ),
      }),
      columnHelper.accessor('published', {
        header: 'Status',
        cell: (info) => (
          <Badge variant={info.getValue() ? 'default' : 'outline'}>{info.getValue() ? 'Active' : 'Draft'}</Badge>
        ),
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        cell: (info) => (
          <span>
            {typeof info.getValue() !== 'undefined' && typeof info.row.original.currency !== 'undefined'
              ? getPrettyCurrency(info.getValue()! / 100, info.row.original.currency)
              : '$0'}
          </span>
        ),
      }),
      columnHelper.accessor('publicUrl', {
        header: 'Actions',
        cell: (info) => (
          <div>
            <Link to={`/products/${info.getValue()}/edit`}>Edit</Link>
          </div>
        ),
      }),
    ],
    [],
  );

  const instance = useReactTable({
    columns,
    data: products,
    getCoreRowModel: getCoreRowModel(),
  });

  return <DataGrid table={instance} />;
};
