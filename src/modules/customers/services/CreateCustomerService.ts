import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Customer } from '../typeorm/entities/Customer';
import { CustomersRepositories } from '../typeorm/repositories/CustomersRepositories';

interface IUser {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: IUser): Promise<Customer> {
    const customersRepositories = getCustomRepository(CustomersRepositories);

    const emailExist = await customersRepositories.findOne({ email });
    if (emailExist) {
      throw new AppError('Email already used!', 404);
    }

    const customer = customersRepositories.create({
      name,
      email,
    });

    await customersRepositories.save(customer);

    return customer;
  }
}

export { CreateCustomerService };
