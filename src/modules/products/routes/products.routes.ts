import {Router} from "express"

import {ProductsController} from "../controllers/ProductsController";

const productsController = new ProductsController();

const router = Router();

router.get('/products', productsController.handle);

export {router}
