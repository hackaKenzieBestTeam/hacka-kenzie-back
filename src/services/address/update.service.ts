import AppDataSource from '../../data-source';
import { Address } from '../../entities';
import { TUpdateAddressRequestData } from '../../types/address';

export const updateAddressService = async (
  id: number,
  data: TUpdateAddressRequestData
): Promise<Address> => {
  const addressRepo = AppDataSource.getRepository(Address);
  await addressRepo.update(id, data);
  const address = (await addressRepo.findOneBy({ id })) as Address;
  return address;
};
