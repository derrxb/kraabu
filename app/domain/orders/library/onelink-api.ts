export enum OneLinkRoutes {
  Payment = '/payment',
  NetworkOne = '/networkOne',
}

export const getOneLinkApiBase = () => {
  if (process.env.ONE_LINK_ENDPOINT) {
    return process.env.ONE_LINK_ENDPOINT;
  }

  throw new Error('ONE_LINK_ENDPOINT environment variable is not set');
};

export type NewPaymentData = {
  /**
   * Access token obtained from the one link dashboard
   */
  token: string;
  /**
   * Salt obtained from the one link dashboard
   */
  salt: string;
  /**
   * Name on the card
   */
  nameOnCard: string;
  /**
   * Card number
   */
  cardNumber: string;
  /**
   * Expiration data
   * @example 09/24
   */
  expirationDate: string;
  /**
   * CCV
   * @example 123
   */
  ccv: string;
  /**
   * Amount in cents
   * @example 1
   */
  amount: string;
};

export type NewPaymentResponse = {
  /**
   * response message
   */
  msg: string;
};
