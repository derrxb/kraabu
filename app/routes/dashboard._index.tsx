import { redirect } from '@vercel/remix';

// loader
export const loader = () => {
  throw redirect('/dashboard/products');
};
