import type { LoaderFunctionArgs } from '@vercel/remix';
import { json } from '@remix-run/node';

export async function loader(args: LoaderFunctionArgs) {
  return json({ alive: true });
}
