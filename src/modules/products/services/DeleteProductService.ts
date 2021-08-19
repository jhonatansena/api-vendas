import { RedisCache } from './../../../shared/cache/RedisCache';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../typeorm/repositories/ProductsRepositories';

interface IProduct {
  id: string;
}

class DeleteProductService {
  async execute({ id }: IProduct): Promise<void> {
    const productsRepositories = getCustomRepository(ProductsRepositories);

    const product = await productsRepositories.findOne({ id });

    if (!product) {
      throw new AppError('Product not found', 404);
    }

    const redisCache = new RedisCache();
    await redisCache.invalidate('api-vendas-PRODUCT_LIST');

    await productsRepositories.remove(product);
  }
}

export { DeleteProductService };
