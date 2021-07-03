import { AppError } from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { Product } from "../../typeorm/entities/Product";
import { ProductsRepositories } from "../../typeorm/repositories/ProductsRepositories";

interface IProductRequest{
  name: string;
  price: number;
  quantity: number;

}

class CreateProductService{

  async execute({name, price, quantity}: IProductRequest): Promise<Product>{
    const productRepositories = getCustomRepository(ProductsRepositories);

    const productExist = await productRepositories.findOne({name})

    if(productExist){
      throw new AppError("This products already exists");
    }

    const product =  productRepositories.create({
      name, price, quantity
    })

    await productRepositories.save(product);

   return product;

  }

}

export {CreateProductService}
