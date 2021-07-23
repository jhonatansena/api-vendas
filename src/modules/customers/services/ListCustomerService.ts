import { getCustomRepository } from 'typeorm';
import { Customer } from '../typeorm/entities/Customer';
import { CustomersRepositories } from '../typeorm/repositories/CustomersRepositories';

class ListCustomerService {
  async execute(): Promise<Customer[]> {
    const customersRepositories = getCustomRepository(CustomersRepositories);

    const customers = await customersRepositories.find();

    return customers;
  }
}

export { ListCustomerService };
