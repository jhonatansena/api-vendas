import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import { AppError } from '@shared/errors/AppError';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) =>{
  if(error instanceof AppError){
    return response.json({
      status: 'error',
      message: error.message
    });
  }
  return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`

  })
})

app.listen(3000, () => {
console.log("Server running on port 3000!")
})
