import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../typeorm/repositories/ProductsRepositories';


class ListProductService{

  async execute(){
    const productRepositories = getCustomRepository(ProductsRepositories);

    const products = await productRepositories.find();

    return products;
  }

}

export {ListProductService}
