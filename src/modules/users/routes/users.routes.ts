import {Router} from "express"
import { CreateUsersController } from "../controllers/CreateUsersController";

const createUsersController = new CreateUsersController();

const userRouter = Router();

userRouter.post('/', createUsersController.create);


export {userRouter}
