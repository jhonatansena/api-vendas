import { Request, Response } from 'express';
import { DeleteProductService } from '../services/DeleteProductService';

class DeleteProductController {
  async delete(request: Request, response: Response): Promise<Response> {
    const deleteProductService = new DeleteProductService();
    const { id } = request.params;

    await deleteProductService.execute({ id });

    return response.json([]);
  }
}

export { DeleteProductController };
