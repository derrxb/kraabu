import superagent from 'superagent';
import { OneLinkEntity } from '../entities/onelink';
import Failure from '~/lib/failure';
import axios from 'axios';
import { HTTP_CODE, HTTP_CODE_TO_STATUS } from '~/presentation/representers/http-response-representer';
import get from 'lodash/get';

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

/**
 * Creates an invoice for users with a specified amount in Belize Dollars.
 */
export const createNewInvoice = async (
  data: Omit<NewPaymentData, 'token' | 'salt'>,
  oneLink: Pick<OneLinkEntity, 'accessToken' | 'salt'>,
): Promise<NewPaymentResponse> => {
  try {
    const credentials = await getCredentials(oneLink);

    const response = await superagent.post(`${getOneLinkApiBase()}/${OneLinkRoutes.Payment}`).send({
      ...data,
      ...credentials,
    });

    return JSON.parse(response.text) as NewPaymentResponse;
  } catch (error) {
    if (get(error as any, 'status')) {
      throw new Failure(
        HTTP_CODE_TO_STATUS[(error as any).status]!,
        JSON.parse(get(error as any, 'response').text)?.msg,
      );
    } else {
      throw new Failure('internal_error', 'Something unexpected happened. Please try again.');
    }
  }
};
