import jwt from 'jsonwebtoken';
import enviroment from '../config/environment.config';
import moment from 'moment';
import { NextFunction, Request, Response } from 'express';

const handleTokenBasedAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authenticationToken = req.headers['authorization'];

  if (authenticationToken !== undefined) {
    var token: string = authenticationToken.replace('Bearer ', '');
    var decoded: any = jwt.verify(token, enviroment.jwt.seed_auth);
    var payload = decoded;
    const isTokenValid = payload.exp >= moment().unix();

    if (isTokenValid) {
      req.tokenData = payload;
      return next();
    } else {
      const error = { message: 'El token ha expirado', status: 401 };
      return next(error);
    }
  }

  const error = {
    message: 'La petición no tiene la cabecera de autenticación',
    status: 403,
  };
  next(error);
};

export default handleTokenBasedAuthentication;
