import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import { AppError } from '@shared/errors/AppError';
import '@shared/typeorm';
import swaggerDocs from './swagger.json';
import upload from '@config/upload';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/file', express.static(upload.directory));

app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/terms', (req, res) => {
  return res.json({
    message: 'Termos de Serviço',
  });
});

app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) =>{
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    });
  },
);

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});
