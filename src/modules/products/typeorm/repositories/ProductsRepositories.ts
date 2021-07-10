import { Repository, EntityRepository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
class ProductsRepositories extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne(name);

    return product;
  }
}

export { ProductsRepositories };
