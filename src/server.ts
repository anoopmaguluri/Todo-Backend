import express from 'express';
import session from 'express-session';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './db';
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/todoRoutes';

dotenv.config();
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: ['http://localhost:8081', 'http://localhost:19006'], // Add your frontend URLs
      credentials: true, // Allow credentials (cookies, etc.)
    })
  );
// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret-key',
    resave: false,
    saveUninitialized: false,
  }));

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});