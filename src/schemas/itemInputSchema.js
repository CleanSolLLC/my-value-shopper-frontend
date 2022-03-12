import * as yup from 'yup';

export const itemInputSchema = yup.object().shape({
  ASIN: yup.string().length(10).required(),
})
.required();