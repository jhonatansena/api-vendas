import { Repository, EntityRepository, In } from 'typeorm';
import { Product } from '../entities/Product';

interface IFindProducts {
  id: string;
}

@EntityRepository(Product)
class ProductsRepositories extends Repository<Product> {
  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne(name);

    return product;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const productsId = products.map(product => product.id);

    const existsProducts = await this.find({
      where: {
        id: In(productsId),
      },
    });

    return existsProducts;
  }
}

export { ProductsRepositories };
