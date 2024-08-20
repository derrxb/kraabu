import superagent from 'superagent';
import Failure from '~/lib/failure';
import { OneLinkEntity } from '../entities/onelink';

export enum OneLinkRoutes {
  Payment = '/payment',
  NetworkOne = '/networkOne',
}

export const getOneLinkApiBase = () => {
  if (process.env.ONE_LINK_ENDPOINT) {
    return process.env.ONE_LINK_ENDPOINT;
  }

  // throw new Error('ONE_LINK_ENDPOINT environment variable is not set');
};

/**
 * Returns the credentials
 * @returns
 */
const getCredentials = async (oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>) => {
  return {
    token: oneLink.accessToken,
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

export class OneLinkPaymentError extends Error {}

/**
 * Creates an invoice for users with a specified amount in Belize Dollars.
 */
export const createNewInvoice = async (
  data: Omit<NewPaymentData, 'token' | 'salt'>,
  oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>,
): Promise<NewPaymentResponse> => {
  try {
    const credentials = await getCredentials(oneLink);

    const response = await superagent.post(`${getOneLinkApiBase()}${OneLinkRoutes.Payment}`).send({
      ...data,
      ...credentials,
    });

    // UGH, OneLink returns `200` for all requests. You need to look at `msg` and ensure
    // its status for the successful requests. So annoying!
    const formattedResponse = JSON.parse(response?.text) as NewPaymentResponse;
    if (formattedResponse.msg.toLowerCase() !== 'success') {
      throw new OneLinkPaymentError(`Error processing payment: ${formattedResponse.msg}`);
    }

    return formattedResponse;
  } catch (error) {
    console.warn('ERROR', error);
    if (error instanceof OneLinkPaymentError) {
      throw error;
    }

    throw new Failure('internal_error', 'Something unexpected happened. Please try again.');
  }
};
