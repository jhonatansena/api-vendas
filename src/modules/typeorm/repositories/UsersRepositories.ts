import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UsersRepositories extends Repository<User>{
  async findByName(name: string): Promise<User | undefined>{
    const user = await this.findOne(name);
    return user;
  }
}

export {UsersRepositories}
