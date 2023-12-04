import { redirect } from '@remix-run/node';

// loader
export const loader = () => {
  throw redirect('/dashboard/products');
};
