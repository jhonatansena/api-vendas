import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { isAfter, addHours } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import { UserTokenRepositories } from '../typeorm/repositories/UserTokenRepositories';

interface IUser {
  token: string;
  password: string;
}

class ResetPasswordService {
  async execute({ token, password }: IUser): Promise<void> {
    const userRepositories = getCustomRepository(UsersRepositories);
    const userTokenRepositories = getCustomRepository(UserTokenRepositories);

    const userToken = await userTokenRepositories.findByToken(token);

    if (!userToken) {
      throw new AppError('User token does not exists');
    }

    const user = await userRepositories.findById(userToken.user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const tokenCreatedAt = userToken.created_at;
    const compareDate = addHours(tokenCreatedAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired');
    }

    user.password = await hash(password, 8);

  }
}

export { ResetPasswordService };
