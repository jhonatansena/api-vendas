import { celebrate, Segments } from 'celebrate';
import multer from 'multer';
import upload from '@config/upload';
import { Router } from 'express';
import Joi from 'joi';
import { CreateUsersController } from '../controllers/CreateUsersController';
import { ListUsersController } from '../controllers/ListUsersController';
import { isAuthenticated } from '../../../shared/http/middlewares/isAuthenticated';
import { UserAvatarController } from '../controllers/UserAvatarController';

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();
const userAvatarController = new UserAvatarController();

const uploadPath = multer(upload);

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

userRouter.patch(
  '/avatar',
  isAuthenticated,
  uploadPath.single('avatar'),
  userAvatarController.update,
);

userRouter.get('/', isAuthenticated, listUsersController.index);

export { userRouter };
