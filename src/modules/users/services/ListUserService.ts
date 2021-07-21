import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { User } from '../typeorm/entities/User';

class ListUserService {
  async execute(): Promise<User[]> {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.find();

    return user;
  }
}

export { ListUserService };
