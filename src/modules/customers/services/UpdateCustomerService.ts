import { getCustomRepository } from 'typeorm';
import { AppError } from '@shared/errors/AppError';
import { Customer } from '../typeorm/entities/Customer';
import { CustomersRepositories } from '../typeorm/repositories/CustomersRepositories';

interface IRequest {
  id: string;
  name: string;
  email: string;
}

class UpdateCustomerService {
  async execute({ id, name, email }: IRequest): Promise<Customer> {
    const customersRepositories = getCustomRepository(CustomersRepositories);

    const customer = await customersRepositories.findById(id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    const customerExists = await customersRepositories.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError('There is already one user with this email.');
    }

    customer.name = name;
    customer.email = email;

    await customersRepositories.save(customer);
    return customer;
  }
}

export { UpdateCustomerService };
