import joi from 'joi';

const getProductSchema = joi.object({
  publicUrl: joi.string().required(),
});

export default getProductSchema;
