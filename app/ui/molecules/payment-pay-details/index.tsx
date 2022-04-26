import Payment from "~/domain/payments/entities/payment";
import { OrderItemList } from "../order-items";
import { OrderStatus } from "../order-status";
import { VendorHeader, VendorHeaderProps } from "../vendor-header";

export type PaymentPayDetailsProps = {
  payment: Payment;
  vendor: VendorHeaderProps;
};

export const PaymentPayDetails = ({
  vendor,
  payment,
}: PaymentPayDetailsProps) => {
  return (
    <div className="flex h-full w-full flex-col bg-slate-100 px-12 md:px-32 md:py-10">
      <div className="mb-10 pb-4">
        <VendorHeader {...vendor} />
      </div>

      <div className="mb-8">
        <OrderStatus status={payment.status} />
      </div>

      <OrderItemList
        items={[
          {
            name: payment.additionalData.order?.name || "Untitled Item",
            currency: {
              amount: payment.additionalData.order?.price || 0,
              type: payment.currency.type,
            },
            quantity: payment.additionalData.order?.quantity || 0,
          },
        ]}
      />
    </div>
  );
};
