import { getCustomRepository } from 'typeorm';
import { Customer } from '../typeorm/entities/Customer';
import { CustomersRepositories } from '../typeorm/repositories/CustomersRepositories';

interface IPaginateCustomer {
  from: number;
  to: number;
  per_page: number;
  total: number;
  current_page: number;
  prev_page: number | null;
  next_page: number | null;
  data: Customer[];
}

class ListCustomerService {
  async execute(): Promise<IPaginateCustomer> {
    const customersRepositories = getCustomRepository(CustomersRepositories);
    const customers = await customersRepositories
      .createQueryBuilder()
      .paginate();

    return customers as IPaginateCustomer;
  }
}

export { ListCustomerService };
