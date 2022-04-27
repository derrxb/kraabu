import joi from "joi";

const getGiggedBzPaymentSchema = joi.object({
  invoiceNo: joi.string().required(),
  paykey: joi.string().required(),
});

export default getGiggedBzPaymentSchema;
