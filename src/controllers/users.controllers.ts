import { Request, Response } from 'express';
import {
  createUserService,
  getUserByIdOrThrowNewErrorService,
  loginUserService
} from '../services/users';
import { TCreateUserRequestData, TLoginUserRequestData } from '../types/user';

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCreateUserRequestData = req.body;
  const newUser = await createUserService(data);
  return res.status(201).json(newUser);
};

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const user = await getUserByIdOrThrowNewErrorService(id);
  return res.status(200).json(user);
};

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TLoginUserRequestData = req.body;
  const token = await loginUserService(data);
  return res.status(200).json(token);
};
