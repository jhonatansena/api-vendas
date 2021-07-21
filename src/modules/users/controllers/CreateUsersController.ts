import { Request, Response } from 'express';
import { CreateUserService } from '@modules/users/services/CreateUserService';

class CreateUsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
export { CreateUsersController };
