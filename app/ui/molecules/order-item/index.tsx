import { truncate } from "lodash";
import type Payment from "~/domain/payments/entities/payment";

export type OrderItemProps = {
  name: string;
  description: string;
  quantity: number;
  currency: Payment["currency"];
};

export const OrderItem = ({ name, currency, quantity,description }: OrderItemProps) => {
  return (
    <article className="flex h-fit w-full max-w-lg flex-col">
      <h2 className="text-lg text-gray-800">{name}</h2>
      <h2 className="text-gray-500 text-sm">{truncate(description || "", {length: 72 })}</h2>

      <div className="flex flex-row items-baseline justify-between pt-2">
        <div className="flex flex-row items-end text-lg text-indigo-500">
          {currency.amount > 0 ? (
            <>
              <span className="mr-2 font-bold">
                {currency?.amount > 0 ? `$${currency.amount}` : "FREE"}
              </span>
              <span className="font-medium">{currency.type}</span>
            </>
          ) : (
            <span className="font-medium uppercase">Free</span>
          )}
        </div>

        {quantity === 0 ? null : (
          <span className="text-gray-500">
            {quantity} {`${quantity > 1 ? "items" : "item"}`}
          </span>
        )}
      </div>
    </article>
  );
};
