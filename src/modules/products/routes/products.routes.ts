import {Router} from "express"
import { CreateProductsController } from "../controllers/products/CreateProductsController";
import { EditProducsController } from "../controllers/products/EditProductsController";
import { ListProductsController } from "../controllers/products/ListProductsController";

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const editProductController = new EditProducsController();

const productsRouter = Router();

productsRouter.post('/', createProductsController.create);
productsRouter.get('/', listProductsController.index);
productsRouter.put('/:id', editProductController.update);



export {productsRouter}
