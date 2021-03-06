import { getCustomRepository } from 'typeorm';
import { AppError } from '@shared/errors/AppError';
import { Customer } from '../typeorm/entities/Customer';
import { CustomersRepositories } from '../typeorm/repositories/CustomersRepositories';

interface IRequest {
  id: string;
}

class ShowCustomerService {
  async execute({ id }: IRequest): Promise<Customer> {
    const customersRepositories = getCustomRepository(CustomersRepositories);

    const customer = await customersRepositories.findById(id);
    if (!customer) {
      throw new AppError('Customer not found');
    }

    return customer;
  }
}

export { ShowCustomerService };
