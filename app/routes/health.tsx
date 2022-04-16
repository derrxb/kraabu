import { json, LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ request }) => {
  return json({ alive: true });
};
