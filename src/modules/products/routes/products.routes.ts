import {Router} from "express"
import { celebrate, Joi, Segments } from "celebrate";

import { CreateProductsController } from "../controllers/CreateProductsController";
import { DeleteProductController } from "../controllers/DeleteProductController";
import { EditProducsController } from "../controllers/EditProductsController";
import { ListProductsController } from "../controllers/ListProductsController";
import { ShowProductController } from "../controllers/ShowProductController";

const createProductsController = new CreateProductsController();
const listProductsController = new ListProductsController();
const editProductController = new EditProducsController();
const showProductController = new ShowProductController();
const deleteProductController = new DeleteProductController();

const productsRouter = Router();

productsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    }
  }),
   showProductController.show
   );


productsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      price: Joi.number().precision(2).required(),
      quantity: Joi.number().required()
    }
  }),
  createProductsController.create
  );

  productsRouter.put(
    '/:id',
    celebrate({
      [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
      },
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
      }
    }),
    editProductController.update);


  productsRouter.delete(
    '/:id',
    celebrate({
      [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
      }
    }),
    deleteProductController.delete);


productsRouter.get('/', listProductsController.index);




export {productsRouter}
