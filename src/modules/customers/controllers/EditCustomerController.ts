import { Response, Request } from 'express';
import { UpdateCustomerService } from '../services/UpdateCustomerService';

class EditCustomerController {
  async update(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const { id } = request.params;

    const updateCustomerService = new UpdateCustomerService();

    const customer = await updateCustomerService.execute({ id, name, email });

    return response.json(customer);
  }
}

export { EditCustomerController };
