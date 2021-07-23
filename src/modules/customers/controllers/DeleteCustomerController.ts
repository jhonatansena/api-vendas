import { Request, Response } from 'express';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController {
  async delete(request: Request, response: Response): Promise<Response> {
    const deleteProductService = new DeleteCustomerService();
    const { id } = request.params;

    await deleteProductService.execute({ id });

    return response.json([]);
  }
}

export { DeleteCustomerController };
