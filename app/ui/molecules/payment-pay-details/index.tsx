import type { OrderDTO } from '~/domain/orders/entities/order';
import type { SupplierDTO } from '~/domain/orders/entities/supplier';
import { OrderTotal } from '~/ui/atoms/order-total';
import { OrderStatus } from '../../atoms/order-status';
import { OrderItemList } from '../order-items';
import { VendorHeader } from '../vendor-header';

export type PaymentPayDetailsProps = {
  payment: OrderDTO;
  vendor: SupplierDTO;
  hasOrderItemsDisplayed: boolean;
};

export const PaymentPayDetails = ({ vendor, payment, hasOrderItemsDisplayed }: PaymentPayDetailsProps) => {
  return (
    <div className="flex h-full w-full flex-col bg-slate-100 px-8 py-4 md:px-16 md:py-10 xl:px-32">
      <div className="mb-4 pb-4 md:mb-10">
        <VendorHeader {...vendor} />
      </div>

      <div className="mb-4">
        <OrderTotal amount={payment.amount} currency={payment.currency} />
      </div>

      <div className="mb-4">
        <OrderStatus status={payment.status} />
      </div>

      {hasOrderItemsDisplayed ? <OrderItemList items={payment.orderItems} /> : null}
    </div>
  );
};
