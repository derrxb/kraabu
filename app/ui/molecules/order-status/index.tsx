import clsx from "clsx";
import { PaymentStatus } from "~/domain/payments/entities/payment";

export type OrderStatusProps = {
  status: PaymentStatus;
};

const getPrettyPaymentStatus = (status: OrderStatusProps["status"]) => {
  switch (status) {
    case PaymentStatus.Completed:
      return "Completed";
    case PaymentStatus.Pending:
      return "In Progress";
    case PaymentStatus.Failed:
      return "Cancelled";
    default:
      break;
  }
};

export const OrderStatus = ({ status }: OrderStatusProps) => {
  return (
    <div className="flex flex-col">
      <span className="mb-2 text-xs uppercase text-gray-500">Order Status</span>

      <span
        className={clsx("font-semibold", {
          "text-green-500": PaymentStatus.Completed === status,
          "text-yellow-700": PaymentStatus.Pending === status,
          "text-red-500": PaymentStatus.Failed === status,
        })}
      >
        {getPrettyPaymentStatus(status)}
      </span>
    </div>
  );
};
