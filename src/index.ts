import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { connectDB } from './db';
import { register, login, logout } from './controllers/userController';
import { createTodo, getTodos, updateTodo, deleteTodo } from './controllers/todoController';
import { isAuthenticated } from './authMiddleware';

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

connectDB();

app.post('/register', register);
app.post('/login', login);
app.post('/logout', logout);

app.post('/todos', isAuthenticated, createTodo);
app.get('/todos', isAuthenticated, getTodos);
app.put('/todos/:id', isAuthenticated, updateTodo);
app.delete('/todos/:id', isAuthenticated, deleteTodo);

app.listen(5000, () => console.log('Server running on port 5000'));
