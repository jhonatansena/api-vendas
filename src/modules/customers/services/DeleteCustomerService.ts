import { getCustomRepository } from 'typeorm';
import { AppError } from '@shared/errors/AppError';
import { CustomersRepositories } from '../typeorm/repositories/CustomersRepositories';

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: IRequest): Promise<void> {
    const customersRepositories = getCustomRepository(CustomersRepositories);

    const customer = await customersRepositories.findById(id);
    if (!customer) {
      throw new AppError('Customer not found');
    }

    await customersRepositories.delete(customer);
  }
}

export { DeleteCustomerService };
