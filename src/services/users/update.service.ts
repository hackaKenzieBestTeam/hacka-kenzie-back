import { User } from '../../entities';
import AppDataSource from '../../data-source';
import { getUserByIdOrThrowNewErrorService } from './get.service';
import { TUpdateUserRequestData } from '../../types/user';
import { updateAddressService } from '../address/update.service';

export const updateUserService = async (
  id: string,
  data: TUpdateUserRequestData
): Promise<User> => {
  const usersRepo = AppDataSource.getRepository(User);
  let user = await getUserByIdOrThrowNewErrorService(id);
  const address = await updateAddressService(user.address.id, data.address);
  data.address = address;
  await usersRepo.update(id, data);
  user = await getUserByIdOrThrowNewErrorService(user.id);
  return user;
};
