import { Request, Response } from 'express';
import { UpdateUserAvatarService } from '../services/UpdateUserAvatarService';
import { classToClass } from 'class-transformer';

class UserAvatarController {
  async update(request: Request, response: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const user = updateAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file?.filename as string,
    });

    return response.json(classToClass(user));
  }
}
export { UserAvatarController };
