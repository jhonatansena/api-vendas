import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { UserTokenRepositories } from '../typeorm/repositories/UserTokenRepositories';

interface IUser {
  email: string;
}

class SendForgotPasswordEmailService {
  async execute({ email }: IUser): Promise<void> {
    const userRepositories = getCustomRepository(UsersRepositories);
    const userTokenRepositories = getCustomRepository(UserTokenRepositories);

    const user = await userRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const token = await userTokenRepositories.generate(user.id);
  }
}

export { SendForgotPasswordEmailService };
