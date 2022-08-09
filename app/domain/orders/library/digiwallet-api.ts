import superagent from 'superagent';

export enum DigiWalletAPIBAse {
  StagingBase = 'blah',
  ProductionBase = 'blah',
}

export enum DigiWalletRoutes {
  CreatePayment = 'SALESREQUESTMERCHANT',
  ConfirmPayment = 'SALESREQUESTEXECTOSELF',
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
  password: string;
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

export const createPaymentRequest = async (data: NewPaymentData): Promise<NewPaymentResponse> => {
  const response = await superagent
    .post(`${getDigiWalletBase()}/${DigiWalletRoutes.CreatePayment}`)
    .set('Content-Type', 'application/xml')
    .send({
      TSCReply: {
        UserName: data.username,
        TerminalType: 'API',
        Password: data.password,
        Function: {
          Param1: data.username,
          Param2: data.amount,
          Param4: data.sourcePhoneNumber,
          Param6: data.destinationPhoneNumber,
        },
      },
    })
    .set(headers);

  return {
    requestId: response.body.TSCReply.Param1,
    originalAmount: response.body.TSCReply.Function.Param2,
    finalAmount: response.body.TSCReply.Function.Param3,
    sourceFee1: response.body.TSCReply.Param4,
    sourceFee2: response.body.TSCReply.Param5,
    sourceFee3: response.body.TSCReply.Param6,
    sourceFee4: response.body.TSCReply.Param7,
    destinationFee1: response.body.TSCReply.Param8,
    destinationFee2: response.body.TSCReply.Param9,
    destinationFee3: response.body.TSCReply.Param10,
    destinationFee4: response.body.TSCReply.Param11,
    payableAmount: response.body.TSCReply.Param15,
  } as NewPaymentResponse;
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
  /**
   * Destination amount less fees
   */
  destinationAmountLessFees: number;
  /**
   * Destination phone number
   */
  destinationPhoneNumber: string;
  /**
   * Source phone number
   */
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
  timestamp: string;
  /**
   * Originating account 1
   */
  originatingAccount1: string;
  /**
   * Originating account 2
   */
  originatingAccount2: string;
  serviceOrderNumber: string;
  brandId: string;
  brandDescription: string;
  destinationFees: string;
  destinationAccountName: string;
  destinationAccountId: string;
};

export const confirmPaymentRequest = async (data: PaymentConfirmationRequest) => {
  const response = await superagent
    .post(`${getDigiWalletBase()}/${DigiWalletRoutes.ConfirmPayment}`)
    .set('Content-Type', 'application/xml')
    .send({
      TSCReply: {
        UserName: data.username,
        TerminalType: 'API',
        Password: data.password,
        Function: {
          Param1: data.confirmationNumber,
          Param2: 'APPROVE',
        },
      },
    })
    .set(headers);

  return {
    referenceNumber: response.body.TSCReply.Param1,
    paymentAmount: response.body.TSCReply.Param2,
    destinationAmountLessFees: response.body.TSCReply.Param3,
    timestamp: response.body.TSCReply.Param8,
    serviceOrderNumber: response.body.TSSReply.Param11,
    sourceFee1: response.body.TSCReply.Param14,
    sourceFee2: response.body.TSCReply.Param19,
    sourceFee3: response.body.TSCReply.Param20,
    sourceFee4: response.body.TSCReply.Param21,
    destinationFee1: response.body.TSCReply.Param23,
    destinationFee2: response.body.TSCReply.Param24,
    destinationFee3: response.body.TSCReply.Param25,
    destinationFee4: response.body.TSCReply.Param26,
    destinationPhoneNumber: response.body.TSCReply.Param28,
    brandId: response.body.TSCReply.Param79,
    brandDescription: response.body.TSCReply.Param80,
    originatingAccount1: response.body.TSCReply.Param81,
    originatingAccount2: response.body.TSCReply.Param82,
    destinationFees: response.body.TSCReply.Param85,
    destinationAccountName: response.body.TSCReply.Param86,
    destinationAccountId: response.body.TSCReply.Param87,
  } as PaymentConfirmationResponse;
};
