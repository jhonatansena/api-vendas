import { getCustomRepository } from 'typeorm';
import { User } from "@modules/typeorm/entities/User";
import { UsersRepositories } from '@modules/typeorm/repositories/UsersRepositories';


class ListUserService{
  async execute(){

    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.find();

    return user;

  }

}

export {ListUserService}
