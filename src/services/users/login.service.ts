import AppDataSource from '../../data-source';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { AppError } from '../../errors/appError';
import { User } from '../../entities';

import { TLoginUserRequestData } from '../../types/user';

export const loginUserService = async ({
  email,
  username,
  cpf,
  password
}: TLoginUserRequestData) => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ email } || { username } || { cpf });

  if (!user) throw new AppError('Invalid Data', 403);

  const passwordMatch = await compare(password!, user.password);

  if (!passwordMatch) throw new AppError('Invalid Data', 403);

  const token = jwt.sign({}, String(process.env.SECRET_KEY), {
    expiresIn: '12h',
    subject: user.id
  });

  return { token: token };
};
