import { Request, RequestHandler, Response } from 'express';
import Todo from '../models/Todo';
import mongoose from 'mongoose';

import { Session, SessionData } from 'express-session';

interface AuthenticatedRequest extends Request {
  session: Session & Partial<SessionData> & {
    userId: string;
  };
}

export const getTodos: RequestHandler = async (req, res): Promise<void> =>  {
  const typedReq = req as AuthenticatedRequest; // Explicitly cast req

  if (!typedReq.session.userId) {
     res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const todos = await Todo.find({
      userId: new mongoose.Types.ObjectId(typedReq.session.userId),
    });

     res.status(200).json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
     res.status(500).json({ message: 'Failed to fetch todos', error });
  }
};

export const createTodo: RequestHandler = async (req, res): Promise<void> => {
  const typedReq = req as AuthenticatedRequest; // Explicitly cast req

  if (!typedReq.session.userId) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const { text } = typedReq.body;

  try {
    const todo = new Todo({
      userId: new mongoose.Types.ObjectId(typedReq.session.userId), // Use the userId from session
      text,
      completed: false,
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create todo', error });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
};

export const deleteTodo = async (req: Request, res: Response) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Todo deleted' });
};