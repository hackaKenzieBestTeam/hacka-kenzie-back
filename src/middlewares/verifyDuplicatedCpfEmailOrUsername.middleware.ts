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

  let cpfAlreadyBeingUsed = null;
  let emailAlreadyBeingUsed = null;
  let usernameAlreadyBeingUsed = null;

  cpf && (cpfAlreadyBeingUsed = await userRepo.findOneBy({ cpf }));
  email && (emailAlreadyBeingUsed = await userRepo.findOneBy({ email }));
  username &&
    (usernameAlreadyBeingUsed = await userRepo.findOneBy({
      username
    }));

  const fields: string[] = [];

  cpfAlreadyBeingUsed && fields.push('CPF');
  emailAlreadyBeingUsed && fields.push('EMAIL');
  usernameAlreadyBeingUsed && fields.push('USERNAME');

  const errorMsg = {
    message: `This ${
      fields.length > 1 ? 'keys are' : 'key is'
    } already registered with another account`,
    keys: fields
  };

  if (fields.length > 0) return res.status(409).json(errorMsg);

  return next();
};
