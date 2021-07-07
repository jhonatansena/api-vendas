import { Router } from 'express';
import { productsRouter } from '@modules/products/routes/products.routes';
('@modules/products/routes/products.routes');
import { userRouter } from '@modules/users/routes/users.routes';
import { authenticateRouter } from '@modules/users/routes/authenticate.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/authenticate', authenticateRouter);

export default routes;
