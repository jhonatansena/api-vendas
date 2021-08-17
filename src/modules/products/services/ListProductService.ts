import { RedisCache } from './../../../shared/cache/RedisCache';
import { Product } from '@modules/products/typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../typeorm/repositories/ProductsRepositories';

class ListProductService {
  async execute(): Promise<Product[]> {
    const productRepositories = getCustomRepository(ProductsRepositories);

    const redisCache = new RedisCache();

    const products = await productRepositories.find();

    return products;
  }
}

export { ListProductService };
