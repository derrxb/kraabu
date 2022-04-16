import joi from "joi";

const completePendingEkyashPaymentSchema = joi.object({
  invoiceNo: joi.string().required(),
});

export default completePendingEkyashPaymentSchema;
