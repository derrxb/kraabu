import superagent from 'superagent';
import { OneLinkEntity } from '../entities/onelink';

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

/**
 * Returns the credentials
 * @returns
 */
const getCredentials = async (oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>) => {
  return {
    accessToken: oneLink.accessToken,
    salt: oneLink.salt,
  };
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

/**
 * Creates an invoice for users with a specified amount in Belize Dollars.
 */
export const createNewInvoice = async (
  data: Omit<NewPaymentData, 'token' | 'salt'>,
  oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>,
): Promise<NewPaymentResponse> => {
  const credentials = await getCredentials(oneLink);

  const response = await superagent.post(`${getOneLinkApiBase()}/${OneLinkRoutes.Payment}`).send({
    ...data,
    ...credentials,
  });

  return JSON.parse(response.text) as NewPaymentResponse;
};
