import { User } from '@modules/typeorm/entities/User';
import { UsersRepositories } from '@modules/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

interface IUser{
  name: string;
  email: string;
  password: string;
  avatar: string;

}


class CreateUserService{
  async execute({name, email, password, avatar}: IUser): Promise<User>{
    const userRepositories = getCustomRepository(UsersRepositories);

    const emailExist = await userRepositories.findOne({email});
    if(emailExist){
      throw new AppError('Email already used!', 404);
    }

    const hashPassword = await hash(password, 8);

    const user = userRepositories.create({
      name,
      email,
      password: hashPassword,
      avatar
    })
    await userRepositories.save(user);

    return user;

  }

}

export {CreateUserService}
