// src/routes/goal.routes.js
import express from 'express';
import { createGoal, getGoals, updateGoal, deleteGoal } from '../controllers/goal.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getGoals)
  .post(createGoal);

router.route('/:id')
  .put(updateGoal)
  .delete(deleteGoal);

export default router;