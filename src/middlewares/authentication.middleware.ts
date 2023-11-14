import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    const errorMsg = {
      message: 'Missing authorization token'
    };
    return res.status(401).json(errorMsg);
  }

  token = token.split(' ')[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: 'Invalid token',
        error: error
      });
    }
    req.user = {
      id: decoded.sub,
      is_admin: decoded.adm
    };
    return next();
  });
};
