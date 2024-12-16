import { Request, Response, NextFunction } from 'express';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.session && req.session.id) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
