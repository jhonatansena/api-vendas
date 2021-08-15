import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { classToClass } from 'class-transformer';

class AuthenticateUserController {
  async authenticate(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();
    const user = await authenticateUserService.execute({ email, password });

    return response.json(classToClass(user));
  }
}

export { AuthenticateUserController };
