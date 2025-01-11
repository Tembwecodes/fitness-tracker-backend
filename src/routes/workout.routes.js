// src/routes/workout.routes.js
import express from 'express';
import { createWorkout, getWorkouts, deleteWorkout } from '../controllers/workout.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

// All routes are protected
router.use(protect);

router.route('/')
  .get(getWorkouts)
  .post(createWorkout);

router.route('/:id')
  .delete(deleteWorkout);

export default router;