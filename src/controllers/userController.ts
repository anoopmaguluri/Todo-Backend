import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Use Object.defineProperty to assign userId to the session
    Object.defineProperty(req.session, 'userId', {
      value: user.id,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

export const logout = (req: Request, res: Response) => {
  req.session.destroy(() => res.json({ message: 'Logged out successfully' }));
};