import { OrderRepositories } from '../typeorm/repositories/OrderRepositories';

import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Order } from '../typeorm/entities/Order';

interface IRequest {
  id: string;
}

class ShowOrderService {
  async execute({ id }: IRequest): Promise<Order> {
    const ordersRepository = getCustomRepository(OrderRepositories);

    const order = await ordersRepository.findById(id);

    if (!order) {
      throw new AppError(`Could not find any order with the given ${id}.`);
    }

    return order;
  }
}

export { ShowOrderService };
