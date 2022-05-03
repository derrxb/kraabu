import type PaymentEntity from "~/domain/payments/entities/payment";
import { SupplierEntity } from "~/domain/payments/entities/supplier";
import { OrderItemList } from "../order-items";
import { OrderStatus } from "../order-status";
import { VendorHeader } from "../vendor-header";

export type PaymentPayDetailsProps = {
  payment: PaymentEntity;
  vendor: SupplierEntity;
};

export const PaymentPayDetails = ({
  vendor,
  payment,
}: PaymentPayDetailsProps) => {
  return (
    <div className="flex h-full w-full flex-col bg-slate-100 px-8 py-4 md:px-16 md:py-10 xl:px-32">
      <div className="mb-4 pb-4 md:mb-10">
        <VendorHeader {...vendor} />
      </div>

      <div className="mb-8">
        <OrderStatus status={payment.status} />
      </div>

      <OrderItemList
        items={[
          {
            name: payment.additionalData.order?.name || "Untitled Item",
            description: payment.additionalData.order?.description || "",
            amount: payment.amount,
            currency: payment.currency,
            quantity: payment.additionalData.order?.quantity || 0,
          },
        ]}
      />
    </div>
  );
};
