import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../../typeorm/entities/Product';
import { ProductsRepositories } from '../../typeorm/repositories/ProductsRepositories';

interface IProductService{
  id: string;
  name: string;
  price: number;
  quantity: number;
}

class EditProductService{
async execute({id, name, price, quantity}: IProductService): Promise<Product>{
  const productsRepositories = getCustomRepository(ProductsRepositories);

  const product = await productsRepositories.findOne({id});


  if(!product){
    throw new AppError("Product not found", 404);
  }

  const productExist = await productsRepositories.findOne({name})

  if(productExist){
    throw new AppError("This products already exists");
  }

    product.name = name;
    product.price = price;
    product.quantity = quantity

  await productsRepositories.save(product);
  return product;
}

}


export {EditProductService}
