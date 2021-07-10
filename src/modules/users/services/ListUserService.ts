import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';

class ListUserService {
  async execute() {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.find();

    return user;
  }
}

export { ListUserService };
