// backend/src/routes/goal.routes.js
import express from 'express';
import { getGoals, createGoal, updateGoal, deleteGoal } from '../controllers/goal.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect); // Protect all goal routes

router.route('/')
  .get(getGoals)
  .post(createGoal);

router.route('/:id')
  .put(updateGoal)
  .delete(deleteGoal);

export default router;