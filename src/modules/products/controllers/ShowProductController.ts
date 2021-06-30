import { Request, Response } from 'express';
import { ShowProductService } from "../services/ShowProductService"


class ShowProductController{
  async show(request: Request, response: Response): Promise<Response>{

    const {id} = request.params

    const showProductService = new ShowProductService();
    const product = await showProductService.execute({id});

    return response.json(product);

  }

}

export {ShowProductController}
