import { Request, Response } from 'express';
import { DeleteProductService } from "../services/DeleteProductService"


class DeleteProductController{

  async delete(request: Request, response: Response){
    const deleteProductService = new DeleteProductService();
    const {id} = request.params;

    const product = await deleteProductService.execute({id})

    return response.json([]);
  }

}

export {DeleteProductController}
