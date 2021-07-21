import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { User } from '../typeorm/entities/User';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  user_id: string;
}

class ShowProfileService {
  async execute({ user_id }: IRequest): Promise<User> {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.findById(user_id);
    if (!user) {
      throw new AppError('User not found');
    }

    return user;
  }
}

export { ShowProfileService };
