import upload from '@config/upload';
import { User } from '@modules/typeorm/entities/User';
import { UsersRepositories } from '@modules/typeorm/repositories/UsersRepositories';
import { AppError } from '@shared/errors/AppError';
import path from 'path';
import fs from 'fs';
import { getCustomRepository } from 'typeorm';

interface IUser {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  async execute({ user_id, avatarFileName }: IUser): Promise<User> {
    const userRepositories = getCustomRepository(UsersRepositories);

    const user = await userRepositories.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(upload.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFileName;
    await userRepositories.save(user);

    return user;
  }
}

export { UpdateUserAvatarService };
