import { instanceToPlain } from 'class-transformer';
import AppDataSource from '../../data-source';
import { User } from '../../entities';
import { AppError } from '../../errors/appError';

export const getUserByIdService = async (id: string): Promise<User | null> => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: id });
  return user;
};

export const getUserByIdOrThrowNewErrorService = async (
  id: string
): Promise<User> => {
  let user = await getUserByIdService(id);
  if (!user) throw new AppError('User not found', 404);
  user = instanceToPlain(user) as User;
  return user;
};
