import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export let loader: LoaderFunction = async ({ request }) => {
  return json({ alive: true });
};
