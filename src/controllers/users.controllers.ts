import { Request, Response } from 'express';
import * as s from '../services/users';
import { TCreateUserRequestData, TLoginUserRequestData } from '../types/user';
import { User } from '../entities';

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCreateUserRequestData = req.body;
  const newUser: User = await s.createUserService(data);
  return res.status(201).json(newUser);
};

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const user: User = await s.getUserByIdOrThrowNewErrorService(id);
  return res.status(200).json(user);
};

export const loginUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TLoginUserRequestData = req.body;
  const token = await s.loginUserService(data);
  return res.status(200).json(token);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.user;
  const data = req.body;
  const updatedUser: User = await s.updateUserService(id, data);
  return res.status(200).json(updatedUser);
};
