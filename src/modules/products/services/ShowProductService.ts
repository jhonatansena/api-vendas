import { AppError } from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { ProductsRepositories } from "../typeorm/repositories/ProductsRepositories";

interface IProduct{
  id: string;
}

class ShowProductService{

  async execute({id}: IProduct){

    const productsRepositories = getCustomRepository(ProductsRepositories);

    const product = await productsRepositories.findOne({id});

    if(!product){
      throw new AppError("Product not found", 404);
    }

    return product;

  }

}

export {ShowProductService}

