import type { ProductDTO } from "~/domain/orders/entities/product"
import { Table, TableBody, TableCell, TableHead, TableRow } from "~/ui/atoms/table"
import { Image } from '~/ui/atoms/image';
import { Badge } from "~/ui/atoms/badge";
import { getPrettyCurrency } from "~/lib/currency";
import { Link } from "@remix-run/react";

export type ProductsTableProps = {
  products: ProductDTO[]
}

export const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <Table>
      <TableRow>
        <TableHead className="w-[100px] sm:table-cell">
          <span className="sr-only">Image</span>
        </TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>Total Sales</TableHead>
        <TableHead className="hidden md:table-cell">
          Created at
        </TableHead>
        <TableHead>
          <span>Actions</span>
        </TableHead>
      </TableRow>
      <TableBody>
        {
          products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image src={product.coverImage} alt={product.name} className="object-contain object-center" />
              </TableCell>
              <TableCell className="font-medium">
                <Link to={`/products/${product.publicUrl}`}>{product.name}</Link>
                <span className="line-clamp-2 text-sm text-gray-500">{product.description}</span>
              </TableCell>
              <TableCell>
                <Badge variant={product.published ? 'default' : "outline"}>{product.published ? 'Active' : 'Draft'}</Badge>
              </TableCell>
              <TableCell>
                <span>{typeof product.price !== 'undefined' && typeof product.currency !== 'undefined' ? getPrettyCurrency(product.price / 100, product.currency) : "$0"}</span>
              </TableCell>
              <TableHead>1</TableHead>
              <TableCell className="hidden md:table-cell">
                Today
              </TableCell>
              <TableCell>
                Actions
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}