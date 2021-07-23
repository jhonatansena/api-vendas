import { Request, Response } from 'express';
import { ListCustomerService } from '../services/ListCustomerService';

class ListCustomersController {
  async index(request: Request, response: Response): Promise<Response> {
    const listCustomerService = new ListCustomerService();

    const customers = await listCustomerService.execute();

    return response.json(customers);
  }
}

export { ListCustomersController };
