import authConfig from '@config/auth';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface ItokenPayload{
  iat: number;
  exp: number;
  sub: string;

}

export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  const authToken = request.headers.authorization;

  if (!authToken) {
    throw new AppError('JWT token is missing.');
  }

  const [, token] = authToken?.split(' ');

  try {
    const decodeToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodeToken as ItokenPayload;

    request.user = {
      id: sub,
    }

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT Token');
  }
}
