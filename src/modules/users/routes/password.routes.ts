import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import { ForgotPasswordController } from '../controllers/ForgotPasswordController';

const forgotPasswordController = new ForgotPasswordController();

const passwordRouter = Router();

passwordRouter.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  forgotPasswordController.create,
);

export { passwordRouter };
