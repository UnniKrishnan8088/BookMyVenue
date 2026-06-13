import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './errorHandler.js';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: string;
    email: string;
  };
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token: string | undefined;

    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return next(new AppError(401, 'Not authorized, token missing'));
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'supersecretjwtkeychangeinproduction'
    ) as {
      id: string;
      role: string;
      email: string;
    };

    req.user = decoded;
    next();
  } catch (error) {
    return next(new AppError(401, 'Not authorized, token invalid'));
  }
};
