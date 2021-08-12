import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { OrdersController } from '../controllers/OrdersController';
import { isAuthenticated } from '@shared/http/middlewares/isAuthenticated';

const ordersController = new OrdersController();

const ordersRouter = Router();

ordersRouter.use(isAuthenticated);

ordersRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  ordersController.show,
);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      customer_id: Joi.string().uuid().required(),
      products: Joi.required(),
    },
  }),
  ordersController.create,
);

export { ordersRouter };
