import joi from "joi";

const createPendingEkyashPaymentSchema = joi.object({
  invoiceno: joi.string().required(),
  currency: joi.string().required(),
  total: joi.string().required(),
  hashkey: joi.string().required(),
  gateway: joi.string().required(),
});

export default createPendingEkyashPaymentSchema;
