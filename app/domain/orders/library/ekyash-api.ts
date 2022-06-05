import { enc, HmacSHA256 } from 'crypto-js';
import superagent from 'superagent';
import type { EKyashEntity } from '../entities/ekyash';

const headers = {
  'Content-Type': 'application/json',
  'Accept-Language': 'en',
  'The-Timezone-IANA': 'Belize',
  WL: 'bibi',
  appVersion: '99.1.1',
  operatingSystem: 'Android',
};

/**
 * Builds & returns a JWT token for calls to E-kyash's API.
 * @returns
 */
const getJWTToken = async (kyash: EKyashEntity) => {
  const header = enc.Base64.stringify(enc.Utf8.parse(JSON.stringify({ alg: 'HS256', typ: 'JWT' })));

  const data = enc.Base64.stringify(
    enc.Utf8.parse(
      JSON.stringify({
        mobile: kyash.phone,
        sid: String(kyash.sid),
        pushkey: '',
        pinHash: kyash.pinEncoded,
      }),
    ),
  );

  const signature = enc.Base64.stringify(HmacSHA256(`${header}.${data}`, kyash.apiKey));

  return `${header}.${data}.${signature}`;
};

type AuthorizationBody = {
  pushkey: string;
  sid: string;
  pinHash: string;
};

type AuthorizationResponse = {
  /**
   * This session ID that should be used for subsequent requests.
   */
  session: string;
  firstName?: string;
  lastName?: string;
  Mobile?: number;
  /**
   * App mobile settings
   *
   * @example
   * {
   *   "nameSettings": "value"
   * }
   */
  Settings?: any;
};

/**
 * Request a session key from E-Kyash's API in order to authorize requests.
 * @returns
 */
const getAuthorization = async (authInfo: AuthorizationBody, data: EKyashEntity): Promise<AuthorizationResponse> => {
  const jwt = await getJWTToken(data);

  const response = await superagent
    .post(`${data.api}/authorization`)
    .send(authInfo)
    .set({
      ...headers,
      SID: authInfo.sid,
      Authorization: `Bearer ${jwt}`,
    });

  return JSON.parse(response.text) as AuthorizationResponse;
};

export type NewInvoiceData = {
  /**
   * Session Id for to authorize request.
   */
  session: string;
  /**
   * Id of the order being carried out
   */
  orderId: string;
  /**
   * Amount in cents.
   */
  amount: number;
  /**
   * Currency in ISO 4217 format.
   */
  currency: string;
  description: string;
  /**
   * Phone number of the customer that will pay the request
   */
  payer?: number;
  /**
   * Metadata related to the items being payed for.
   * @example
   * {
   *   "field": "value"
   * }
   */
  fieldsOther?: Object | any[];
  /**
   * Similar to fieldsOther but are used only on mobile phones.
   * @example
   * {
   *   "field": "value"
   * }
   */
  fieldsApp?: Object | any[];
  /**
   * Before the merchant creates the
   * invoice, the merchant can call the
   * “UploadImage” endpoint to upload an
   * image (for example the invoice). When
   * the call to create the invoice is made,
   * the Merchant can specify the image
   * name in this field. The customer will
   * receive the image and details when
   * they receive the notification.
   */
  receipt?: string;
  /**
   * Invoice date and time until it expires.
   * @example
   * 2021-01-17 15:45:12
   */
  dateLife?: string;
  /**
   * Reusable invoice
   */
  longTerm?: boolean;
};

export type NewInvoiceResponse = {
  /**
   * @type AuthorizationResponse.Session
   */
  invoiceId: number;
  /**
   * Link to the QR code of the invoice.
   * @example https://domain/qr/invoice/368050143849
   */
  qrUrl: string;
  /**
   * The data that is in the QR code.
   * @example 368050143849
   */
  qrData: string;
  /**
   * Link to the uploaded image - se receipt parameter in the request
   * @example https://domain/qr/invoice/368050143849
   */
  receiptUrl: string;
  /**
   * A deep link that can be used to open the user's app.
   */
  paymentLink: string;
};

/**
 * Creates an invoice for users with a specified amount in Belize Dollars.
 */
const createNewInvoice = async (data: NewInvoiceData, kyash: EKyashEntity): Promise<NewInvoiceResponse> => {
  const jwt = await getJWTToken(kyash);

  const response = await superagent
    .post(`${kyash.api}/create-new-invoice`)
    .send({ ...data })
    .set({
      ...headers,
      Authorization: `Bearer ${jwt}`,
    });

  return JSON.parse(response.text) as NewInvoiceResponse;
};

type UploadInvoiceImageData = {
  /**
   * Session ID authorizing the request
   */
  session: string;
  /**
   * Image type
   */
  imageType: string;
  /**
   * Image file. TODO: What format should this be in?
   */
  file: any;
};

type UploadInvoiceImageResponse = {
  /**
   * The result of the action
   */
  success?: boolean;
};

const uploadInvoiceImage = async (data: UploadInvoiceImageData, kyash: EKyashEntity) => {
  const response = await superagent.post(`${kyash.api}/upload-image`).send({ ...data });

  return JSON.parse(response.text) as UploadInvoiceImageResponse;
};

export enum TransactionStatus {
  New,
  Pending,
  Declined,
  Accepted,
}

export type CompletedPaymentCallbackData = {
  /**
   * The Order ID originally submitted by the Merchant’s system when creating the invoice E.g. 368050143849
   */
  orderId: string;
  /**
   * The internal Invoice ID assigned by the E-kyash system.
   */
  invoiceId: string;
  /**
   * The internal Transaction ID generated by the E-kyash system.
   * This is the same transaction ID that will be used when performing reversals to transactions.
   */
  transactionID: string;
  /**
   * The status of transaction. The following 3 possible statuses will be implemented:
   * 1 – The invoice is new and has not been actioned by the Consumer
   * 2 – The transaction was DECLINED by the Consumer
   * 3 – The transaction was APPROVED by the consumer
   */
  statusPay: TransactionStatus;
  /**
   * This hash can be used by the Merchants system to validate the integrity of the Message. The hash is constructed as follows:
   * 1. Take the request object (except for the “hash” field)
   * and generate the key using the sha256 algorithm and the Merchant API password provided by the bank.
   */
  hash: string;
};

const getAuthenticatedHash = (data: Omit<CompletedPaymentCallbackData, 'transactionID'>, password: string) => {
  return enc.Base64.stringify(HmacSHA256(JSON.stringify(data), password));
};

const isCallbackRequestValid = (data: CompletedPaymentCallbackData, password: string) => {
  return (
    data.hash ===
    getAuthenticatedHash(
      {
        hash: data.hash,
        invoiceId: data.invoiceId,
        orderId: data.orderId,
        statusPay: data.statusPay,
      },
      password,
    )
  );
};

export {
  getJWTToken,
  getAuthorization,
  createNewInvoice,
  uploadInvoiceImage,
  getAuthenticatedHash,
  isCallbackRequestValid,
};
