import { json, LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ params }) => {
  return json({
    alive: true,
  });
};
