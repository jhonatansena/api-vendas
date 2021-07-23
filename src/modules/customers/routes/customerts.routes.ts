import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import { CreateCustomerController } from '../controllers/CreateCustomerContoller';
import { DeleteCustomerController } from '../controllers/DeleteCustomerController';
import { EditCustomerController } from '../controllers/EditCustomerController';
import { ListCustomersController } from '../controllers/IndexCustomerController';
import { ShowCustomerController } from '../controllers/ShowCustomerController';

const createCustomerController = new CreateCustomerController();
const listCustomerController = new ListCustomersController();
const editCustomerController = new EditCustomerController();
const showCustomerController = new ShowCustomerController();
const deleteCustomerController = new DeleteCustomerController();

const customerRouter = Router();

customerRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  showCustomerController.show,
);

customerRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  createCustomerController.create,
);

customerRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  editCustomerController.update,
);

customerRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  deleteCustomerController.delete,
);

customerRouter.get('/', listCustomerController.index);

export { customerRouter };
