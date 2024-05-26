import type { OrderDTO } from '~/domain/orders/entities/order';
import { PaymentPayCode } from '~/ui/molecules/payment-methods/ekyash';
import { OneLinkForm } from '~/ui/molecules/payment-methods/one-link';
import { PaymentPayDetails } from '~/ui/molecules/payment-pay-details';

export enum PaymentMethod {
  EKyash,
  OneLink,
}

export type PendingPaymentProps = {
  order: OrderDTO;
  hasOrderItemsDisplayed: boolean;
  paymentMethod: PaymentMethod;
};

export const PendingPayment = ({ order, hasOrderItemsDisplayed, paymentMethod }: PendingPaymentProps) => {
  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full lg:w-1/2">
        <PaymentPayDetails order={order} user={order.user} hasOrderItemsDisplayed={hasOrderItemsDisplayed} />
      </div>

      <div className="h-full w-full lg:w-1/2">
        {paymentMethod === PaymentMethod.EKyash && order.ekyashTransaction?.qrCodeUrl ? (
          <PaymentPayCode
            qr={order.ekyashTransaction?.qrCodeUrl as string}
            paymentMethod={{
              name: 'E-Kyash',
              color: '#39ae49',
              url: 'https://www.e-kyash.com/',
            }}
            deepLink={order.ekyashTransaction?.deepLinkUrl as string}
          />
        ) : (
          <div className="w-full rounded-md bg-red-200 py-2 px-4 pb-4">
            <span className="text-red-700">
              Oh, no! Something unexpected happened. Don't worry, your wallet has not been charged.
            </span>
          </div>
        )}

        {paymentMethod === PaymentMethod.OneLink ? <OneLinkForm /> : null}
      </div>
    </div>
  );
};
