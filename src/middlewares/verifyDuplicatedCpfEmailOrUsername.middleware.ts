import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';

export const verifyDuplicatedCpfEmailOrUsername = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cpf, username, email }: User = req.body;

  const userRepo = AppDataSource.getRepository(User);

  const cpfAlreadyBeingUsed = await userRepo.findOneBy({ cpf: cpf });
  const emailAlreadyBeingUsed = await userRepo.findOneBy({ email: email });
  const usernameAlreadyBeingUsed = await userRepo.findOneBy({
    username: username
  });

  const fields: string[] = [];

  cpfAlreadyBeingUsed && fields.push('CPF');
  emailAlreadyBeingUsed && fields.push('USERNAME');
  usernameAlreadyBeingUsed && fields.push('EMAIL');

  const errorMsg = {
    message: 'This keys(s) already registered with another account',
    keys: fields
  };

  if (fields.length > 0) return res.status(409).json(errorMsg);

  return next();
};
