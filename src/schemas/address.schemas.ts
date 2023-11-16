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

export const updateAddressRequestSchema = z.object({
  zip_code: z.string().optional(),
  street: z.string().optional(),
  number: z.number().optional(),
  complement: z.string().optional(),
  district: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional()
});
