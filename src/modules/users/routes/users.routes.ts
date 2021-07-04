import {Router} from "express"
import { CreateUsersController } from "../controllers/CreateUsersController";
import { ListUsersController } from "../controllers/ListUsersController";

const createUsersController = new CreateUsersController();
const listUsersController = new ListUsersController();

const userRouter = Router();

userRouter.post('/', createUsersController.create);

userRouter.get('/', listUsersController.index);


export {userRouter}
