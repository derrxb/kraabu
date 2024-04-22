import truncate from 'lodash/truncate';
import type { OrderItemDTO } from '~/domain/orders/entities/order-item';
import { getPrettyCurrency } from '~/lib/currency';

export type OrderItemProps = OrderItemDTO;

export const OrderItem = ({ name, currency, quantity, description, price }: OrderItemDTO) => {
  return (
    <article className="flex h-fit w-full max-w-lg flex-col">
      <h2 className="text-lg text-gray-800">{name}</h2>
      <h2 className="text-sm text-gray-500">{truncate(description || '', { length: 72 })}</h2>

      <div className="flex flex-row items-baseline justify-between pt-2">
        <div className="flex flex-row items-end text-lg text-primary-1">
          {price > 0 ? (
            <>
              <span className="mr-2 font-bold">
                {price > 0 ? `${getPrettyCurrency(price / 100, currency)}` : 'FREE'}
              </span>
            </>
          ) : (
            <span className="font-medium uppercase">Free</span>
          )}
        </div>

        {quantity === 0 ? null : (
          <span className="text-gray-500">
            {quantity} {`${quantity > 1 ? 'items' : 'item'}`}
          </span>
        )}
      </div>
    </article>
  );
};
