import {Router} from "express"
import { CreateProductsController } from "../controllers/CreateProductsController";
import { EditProducsController } from "../controllers/EditProductsController";
import { ListProductsController } from "../controllers/ListProductsController";
import { ShowProductController } from "../controllers/ShowProductController";

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const editProductController = new EditProducsController();
const showProductController = new ShowProductController();

const productsRouter = Router();

productsRouter.post('/', createProductsController.create);
productsRouter.get('/', listProductsController.index);
productsRouter.put('/:id', editProductController.update);
productsRouter.get('/:id', showProductController.show);



export {productsRouter}
