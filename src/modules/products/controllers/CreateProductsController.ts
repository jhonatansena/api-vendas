import { CreateProductService } from '@modules/products/services/CreateProductService';
import { Request, Response } from 'express';

class CreateProductsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });

    return response.json(product);
  }
}

export { CreateProductsController };
