import z from 'zod';
import * as us from '../schemas/users.schemas';

export type TLoginUserRequestData = z.infer<typeof us.loginUserRequestSchema>;

export type TCreateUserRequestData = z.infer<typeof us.createUserRequestSchema>;

export type TUpdateUserRequestData = z.infer<typeof us.updateUserRequestSchema>;
