// src/routes/workout.routes.js
import express from 'express';
import { getWorkouts, createWorkout, getWorkout, updateWorkout, deleteWorkout } from '../controllers/workout.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.use(protect); // Protect all workout routes

router.route('/')
  .get(getWorkouts)
  .post(createWorkout);

router.route('/:id')
  .get(getWorkout)
  .put(updateWorkout)
  .delete(deleteWorkout);

export default router;