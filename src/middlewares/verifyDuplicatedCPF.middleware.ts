import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../data-source';
import { User } from '../entities/user.entity';
import { EntityTarget, ObjectLiteral } from 'typeorm';

export const verifyDuplicatedCPF =
  (entity: EntityTarget<ObjectLiteral>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { cpf }: User = req.body;

    const userRepo = AppDataSource.getRepository(entity);

    const errorMessage = { message: 'CPF already being used!' };

    const cpfAlreadyBeingUsed = await userRepo.findOneBy({ cpf: cpf });

    if (cpfAlreadyBeingUsed) return res.status(409).json(errorMessage);

    return next();
  };
