import superagent from 'superagent';

export enum DigiWalletAPIBAse {
  StagingBase = 'blah',
  ProductionBase = 'blah',
}

export enum DigiWalletRoutes {
  CreatePayment = 'SALESREQUESTMERCHANT',
}

const headers = {
  'Content-Type': 'application/xml',
};

const getDigiWalletBase = () => {
  if (process.env.NODE_ENV === 'production') {
    return DigiWalletAPIBAse.ProductionBase;
  }

  return DigiWalletAPIBAse.StagingBase;
};

export type NewPaymentData = {
  /**
   * The brand ID for the payment operation. (Provided by DigiWallet)
   */
  username: number;
  /**
   * The amount for the payment (Payment Amount)
   */
  amount: number;
  /**
   * The source phone account number
   */
  sourcePhoneNumber: string;
  /**
   * The destination phone number
   */
  destinationPhoneNumber: string;
};

export type NewPaymentResponse = {
  /**
   * The request ID (a unique reference number that identifies the request in the DigiWallet platform).
   */
  requestId: string;
  /**
   * The original payment amount
   */
  originalAmount: number;
  /**
   * The final payment amount
   */
  finalAmount: number;
  /**
   * The first set of fees applied to the source account.
   */
  sourceFee1: number;
  /**
   * The second set of fees applied to the source account.
   */
  sourceFee2: number;
  /**
   * The third set of fees applied to the source account.
   */
  sourceFee3: number;
  /**
   * The fourth set of fees applied to the source account.
   */
  sourceFee4: number;
  /**
   * The first set of fees applied to the destination account.
   */
  destinationFee1: number;
  /**
   * The second set of fees applied to the destination account.
   */
  destinationFee2: number;
  /**
   * The third set of fees applied to the destination account.
   */
  destinationFee3: number;
  /**
   * The fourth set of fees applied to the destination account.
   */
  destinationFee4: number;
  /**
   * The payable amount
   */
  payableAmount: number;
};

const createPaymentRequest = async (data: NewPaymentData): Promise<NewPaymentResponse> => {
  const response = await superagent
    .post(`${getDigiWalletBase()}/${DigiWalletRoutes.CreatePayment}`)
    .send(data)
    .set(headers);

  return Promise.resolve({} as NewPaymentResponse);
};

export type PaymentConfirmationRequest = {
  /**
   * The brand ID for the payment operation. (Provided by DigiWallet)
   */
  username: string;
  /**
   * The password for the merchant
   */
  password: string;
  /**
   * The confirmation number (TAC?)
   */
  confirmationNumber: string;
  /**
   * Has the request been approved?
   */
  approved: true;
};

export type PaymentConfirmationResponse = {
  //   Parameter Description
  /**
   * Param1 Reference Number
   * */
  referenceNumber: string;
  /**
   * Param2 Payment Amount
   */
  paymentAmount: number;
  destinationPhoneNumber: string;
  sourcePhoneNumber: string;
  /**
   * The first set of fees applied to the destination account.
   */
  destinationFee1: number;
  /**
   * The second set of fees applied to the destination account.
   */
  destinationFee2: number;
  /**
   * The third set of fees applied to the destination account.
   */
  destinationFee3: number;
  /**
   * The fourth set of fees applied to the destination account.
   */
  destinationFee4: number;
  /**
   * The first set of fees applied to the source account.
   */
  sourceFee1: number;
  /**
   * The second set of fees applied to the source account.
   */
  sourceFee2: number;
  /**
   * The third set of fees applied to the source account.
   */
  sourceFee3: number;
  /**
   * The fourth set of fees applied to the source account.
   */
  sourceFee4: number;
  /**
   * Created at time
   */
  timestamp: number;
};
