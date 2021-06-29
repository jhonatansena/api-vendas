import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductService";
import { ListProductService } from "../services/ListProductService";

class ProductsController{
  async create(request: Request, response: Response){
    const {name, price, quantity} = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({name, price, quantity});

    return response.json(product);
  }
  async index(request: Request, response: Response){
  const listProductService = new ListProductService();

  const products = await listProductService.execute();

  return response.json(products);
  }


}

export {ProductsController}
