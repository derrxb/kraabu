export enum GiggedRoutes {
  TransactionStatus = 'https://giggedbz.arcadier.io/user/checkout/transaction-status',
  OrderStatus = 'https://giggedbz.arcadier.io/user/checkout/current-status',
  OrderDetails = 'https://giggedbz.arcadier.io/user/checkout/order-details',
}

export type GiggedOrderHandshake = {
  /**
   * Unique identifier for the invoice
   */
  invoiceno: string;
  /**
   * Currency type. ISO3 code of currency.
   */
  currency: string;
  /**
   * Total amount to charge.
   */
  total: string;
  /**
   * Arcadier hashkey
   */
  hashkey: string;
  /**
   * Your arcadier gateway
   */
  gateway: string;
};

export type CreatePaymentResponse = string;
