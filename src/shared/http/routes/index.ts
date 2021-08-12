import { Router } from 'express';
import { productsRouter } from '@modules/products/routes/products.routes';
('@modules/products/routes/products.routes');
import { userRouter } from '@modules/users/routes/users.routes';
import { authenticateRouter } from '@modules/users/routes/authenticate.routes';
import { passwordRouter } from '@modules/users/routes/password.routes';
import { profileRouter } from '@modules/users/routes/profile.routes';
import { customerRouter } from '@modules/customers/routes/customerts.routes';
import { ordersRouter } from '@modules/orders/routes/orders.routes';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', userRouter);
routes.use('/authenticate', authenticateRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/customers', customerRouter);
routes.use('/orders', ordersRouter);

export default routes;
