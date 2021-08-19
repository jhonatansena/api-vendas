import { RedisCache } from './../../../shared/cache/RedisCache';
import { Product } from '@modules/products/typeorm/entities/Product';
import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../typeorm/repositories/ProductsRepositories';

class ListProductService {
  async execute(): Promise<Product[]> {
    const productRepositories = getCustomRepository(ProductsRepositories);

    const redisCache = new RedisCache();

    let products = await redisCache.recover<Product[]>(
      'api-vendas-PRODUCT_LIST',
    );

    if (!products) {
      products = await productRepositories.find();

      await redisCache.save('api-vendas_PRODUCT_LIST', products);
    }
    return products;
  }
}

export { ListProductService };
