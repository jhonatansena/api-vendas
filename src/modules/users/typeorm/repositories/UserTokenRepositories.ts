import { EntityRepository, Repository } from 'typeorm';
import { UserToken } from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokenRepositories extends Repository<UserToken> {
  async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.findOne({
      where: {
        token,
      },
    });
    return userToken;
  }

  async generate(user_id: string): Promise<UserToken | undefined> {
    const userToken = await this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  }
}

export { UserTokenRepositories };
