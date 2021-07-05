import { celebrate, Segments } from "celebrate";
import {Router} from "express"
import Joi from "joi";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const authenticateUserController = new AuthenticateUserController();

const authenticateRouter = Router();

authenticateRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required()
    }
  }),
  authenticateUserController.authenticate);



export {authenticateRouter}
