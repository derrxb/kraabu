import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

export async function loader(args: LoaderArgs) {
  return json({ alive: true });
}
