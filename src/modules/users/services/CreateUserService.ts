import { User } from '@modules/users/typeorm/entities/User';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

interface IUser {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUser): Promise<User> {
    const userRepositories = getCustomRepository(UsersRepositories);

    const emailExist = await userRepositories.findOne({ email });
    if (emailExist) {
      throw new AppError('Email already used!', 404);
    }

    const hashPassword = await hash(password, 8);

    const user = userRepositories.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
