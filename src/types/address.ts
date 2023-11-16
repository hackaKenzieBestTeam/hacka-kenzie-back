import { z } from 'zod';
import { updateAddressRequestSchema } from '../schemas/address.schemas';

export type TUpdateAddressRequestData = z.infer<
  typeof updateAddressRequestSchema
>;
