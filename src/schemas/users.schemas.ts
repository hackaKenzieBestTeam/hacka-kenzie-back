import z from 'zod';
import { createAddressRequestSchema } from './address.entity';

export const loginUserRequestSchema = z.object({
  email: z.string().email('Invalid email format.').optional(),
  username: z.string().optional(),
  cpf: z.string().optional(),
  password: z.string()
});

export const createUserRequestSchema = z.object({
  username: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email('Invalid email format.').optional(),
  password: z.string(),
  cpf: z.string(),
  phone: z.string(),
  birth_date: z.date(),
  is_admin: z.boolean().optional(),
  address: createAddressRequestSchema
});
