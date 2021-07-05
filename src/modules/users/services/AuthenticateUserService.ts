import { getCustomRepository } from 'typeorm';
import { User } from "@modules/typeorm/entities/User";
import { UsersRepositories } from '@modules/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';


interface IRequeste{
  email: string;
  password: string;
}

interface IResponse{
  user: {
    name: string;
    password: string
  },
  token: string;
}

class AuthenticateUserService{
  async execute({email, password}: IRequeste): Promise<IResponse>{
    const userRepositories = getCustomRepository(UsersRepositories);

  const user = await userRepositories.findOne({email});

    if(!user){
      throw new AppError("Email or password incorrect!");
    }


    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Email or password incorrect!")
    }

    const token = sign({}, "1b5401fcb3ef50b1d8343080d05c18f5",{
      subject: user.id,
      expiresIn: "1d"
    });

    return {user, token};

  }
}

export {AuthenticateUserService}
