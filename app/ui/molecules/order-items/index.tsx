import { OrderItem, OrderItemProps } from "../order-item";

export type OrderItemListProps = {
  items: Array<OrderItemProps>;
};

export const OrderItemList = ({ items }: OrderItemListProps) => {
  return (
    <div className="flex w-full flex-col">
      <span className="mb-2 text-xs uppercase text-gray-500">
        Order Details
      </span>

      {items.length === 0 ? (
        <span className="text-gray-500">No items available...</span>
      ) : (
        <ul className="list-none space-y-2">
          {items.map((item) => (
            <li key={item.name + item.quantity + item.currency.amount}>
              <OrderItem {...item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
