import joi from "joi";

const completePendingEkyashPaymentSchema = joi.object({
  orderId: joi.string().required(),
  invoiceId: joi.string().required(),
  transactionId: joi.string().required(),
  statusPay: joi.number().required(),
  hash: joi.string().required(),
});

export default completePendingEkyashPaymentSchema;
