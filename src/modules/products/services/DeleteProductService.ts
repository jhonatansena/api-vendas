import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../../typeorm/entities/Product';
import { ProductsRepositories } from '../../typeorm/repositories/ProductsRepositories';

interface IProduct{
  id: string;
}

class DeleteProductService{
  async execute({id}: IProduct){
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const product = await productsRepositories.findOne({id});

    if(!product){
      throw new AppError("Product not found", 404);
    }

    await productsRepositories.remove(product);

    // return product;

  }

}

export {DeleteProductService}
