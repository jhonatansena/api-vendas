import {Router} from "express"
import { CreateProductsController } from "../controllers/products/CreateProductsController";
import { ListProductsController } from "../controllers/products/ListProductsController";

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();

const productsRouter = Router();

productsRouter.post('/', createProductsController.create);
productsRouter.get('/', listProductsController.index);


export {productsRouter}
