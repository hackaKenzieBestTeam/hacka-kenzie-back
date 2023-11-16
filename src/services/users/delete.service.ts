import AppDataSource from '../../data-source';
import { User } from '../../entities';
import { getUserByIdOrThrowNewErrorService } from './get.service';

export const deleteUserService = async (id: string): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);
  await userRepo.delete(id);
  return;
};
