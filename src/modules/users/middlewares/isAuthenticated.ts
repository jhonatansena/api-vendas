import authConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';


export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  const authToken  = request.headers.authorization;

  if(!authToken){
    throw new AppError('JWT token is missing.')
  }

  const [, token] = authToken?.split(" ");

try {

  const decodeToken = verify(token, authConfig.jwt.secret);

  return next();

} catch (error) {
   throw new AppError('Invalid JWT Token')
}

}
