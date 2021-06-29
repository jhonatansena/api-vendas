import { ListProductService } from '@modules/products/services/ListProductService';
import { Request, Response } from 'express';

class ListProductsController{
  async index(request: Request, response: Response){
    const listProductService = new ListProductService();

    const products = await listProductService.execute();

    return response.json(products);
    }

}

export {ListProductsController}
