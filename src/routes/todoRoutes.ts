import { Router } from 'express';
import { isAuthenticated } from '../authMiddleware';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

router.use(isAuthenticated);
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
