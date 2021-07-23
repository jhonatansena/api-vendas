import { EditProductService } from '@modules/products/services/EditProductService';
import { Response } from 'express';
import { Request } from 'express';

class EditProducsController {
  async update(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;

    const { id } = request.params;

    const editProductService = new EditProductService();

    const product = await editProductService.execute({
      id,
      name,
      price,
      quantity,
    });

    return response.json(product);

  }

}

export {EditProducsController}
