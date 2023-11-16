import z from 'zod';
import {
  createAddressRequestSchema,
  updateAddressRequestSchema
} from './address.schemas';

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
  birth_date: z.string(),
  is_admin: z.boolean().optional(),
  address: createAddressRequestSchema
});

export const updateUserRequestSchema = z.object({
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  cpf: z.string().optional(),
  password: z.string().optional(),
  phone: z.string().optional(),
  birth_date: z.string().optional(),
  address: updateAddressRequestSchema
});
