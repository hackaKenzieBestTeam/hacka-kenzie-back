import AppDataSource from '../../data-source';
import { User, Address } from '../../entities';
import { hash } from 'bcrypt';
import { instanceToPlain } from 'class-transformer';
// import { createCartService } from '../cart';
import { TCreateUserRequestData } from '../../types/user';
import { getUserByIdOrThrowNewErrorService } from './get.service';

export const createUserService = async (
  data: TCreateUserRequestData
): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);
  const addressRepo = AppDataSource.getRepository(Address);
  const { address, password, birth_date } = data;

  data.address = addressRepo.create(address);
  data.password = await hash(password, 10);
  data.birth_date = new Date(birth_date);

  let newUser = userRepo.create(data);
  await userRepo.save(newUser);

  newUser = await getUserByIdOrThrowNewErrorService(newUser.id);

  return newUser;
};
