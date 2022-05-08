import type { LoaderFunction } from 'remix';
import { json } from 'remix';

export let loader: LoaderFunction = async ({ request }) => {
  return json({ alive: true });
};
