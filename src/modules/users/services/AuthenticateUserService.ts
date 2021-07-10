import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '@modules/users/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

interface IRequeste {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    password: string;
  };
  token: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IRequeste): Promise<IResponse> {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.findOne({ email });

    if (!user) {
      throw new AppError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.experesIn,
    });

    return { user, token };
  }
}

export { AuthenticateUserService };
