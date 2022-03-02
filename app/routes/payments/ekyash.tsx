import { json, LoaderFunction } from "remix";
import { getJWTToken } from "~/domain/payments/library/ekyash-api";

export let loader: LoaderFunction = async ({ params }) => {
  console.log(await getJWTToken());

  return json({
    alive: true,
  });
};
