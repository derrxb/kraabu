import type { OrderDTO } from '~/domain/orders/entities/order';
import type { UserDTO } from '~/domain/orders/entities/user';
import { OrderTotal } from '~/ui/atoms/order-total';
import { OrderStatus } from '../../atoms/order-status';
import { OrderItemList } from '../order-items';
import { VendorHeader } from '../vendor-header';

export type PaymentPayDetailsProps = {
  order: OrderDTO;
  user?: UserDTO;
  hasOrderItemsDisplayed: boolean;
};

export const PaymentPayDetails = ({ user, order, hasOrderItemsDisplayed }: PaymentPayDetailsProps) => {
  return (
    <div className="flex h-full w-full flex-col bg-slate-100 px-8 py-4 md:px-16 md:py-10 xl:px-32">
      <div className="mb-4 pb-4 md:mb-10">{user ? <VendorHeader {...user} /> : null}</div>

      <div className="mb-4">
        <OrderTotal amount={order.amount} currency={order.currency} />
      </div>

      <div className="mb-4">
        <OrderStatus status={order.status} />
      </div>

      {hasOrderItemsDisplayed ? <OrderItemList items={order.orderItems} /> : null}
    </div>
  );
};
