import type { OrderDTO } from '~/domain/orders/entities/order';
import { PaymentPayCode } from '~/ui/molecules/payment-pay-code';
import { PaymentPayDetails } from '~/ui/molecules/payment-pay-details';

export type PendingPaymentProps = {
  payment: OrderDTO;
};

export const PendingPayment = ({ payment }: PendingPaymentProps) => {
  return (
    <div className="flex h-full w-full flex-col text-gray-800 md:flex-row">
      <div className="h-full w-full lg:w-1/2">
        <PaymentPayDetails payment={payment} vendor={payment.supplier} />
      </div>

      <div className="h-full w-full lg:w-1/2">
        {payment.ekyashTransaction?.qrCodeUrl ? (
          <PaymentPayCode
            qr={payment.ekyashTransaction?.qrCodeUrl as string}
            paymentMethod={{
              name: 'E-Kyash',
              color: '#39ae49',
              url: 'https://www.e-kyash.com/',
            }}
            deepLink={payment.ekyashTransaction?.deepLinkUrl as string}
          />
        ) : (
          <div className="w-full rounded-md bg-red-200 py-2 px-4 pb-4">
            <span className="text-red-700">
              Oh, no! Something unexpected happened. Don't worry, your wallet has not been charged.
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
