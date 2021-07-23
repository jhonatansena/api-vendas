import { Request, Response } from 'express';
import { ShowCustomerService } from '../services/ShowCustomerService';

class ShowCustomerController {
  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showCustomerService = new ShowCustomerService();
    const customer = await showCustomerService.execute({ id });

    return response.json(customer);
  }
}

export { ShowCustomerController };
