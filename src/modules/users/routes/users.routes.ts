import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { CreateUsersController } from '../controllers/CreateUsersController';
import { ListUsersController } from '../controllers/ListUsersController';
import { isAuthenticated } from '../../../shared/http/middlewares/isAuthenticated';

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();

const userRouter = Router();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  createUsersController.create,
);

userRouter.get('/', isAuthenticated, listUsersController.index);

export { userRouter };
