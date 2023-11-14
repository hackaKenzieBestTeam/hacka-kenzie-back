import z from 'zod';

export const createAddressRequestSchema = z.object({
  zip_code: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string()
});
