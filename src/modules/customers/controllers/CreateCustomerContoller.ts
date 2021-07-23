import { Request, Response } from 'express';
import { CreateCustomerService } from '../services/CreateCustomerService';

class CreateCustomerController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const createCustomerService = new CreateCustomerService();

    const customer = await createCustomerService.execute({
      name,
      email,
    });

    return response.json(customer);
  }
}

export { CreateCustomerController };
