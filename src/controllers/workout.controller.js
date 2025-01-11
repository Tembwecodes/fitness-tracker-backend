// src/controllers/workout.controller.js
import Workout from '../models/workout.model.js';

// Create workout
export const createWorkout = async (req, res) => {
  try {
    const workout = new Workout({
      ...req.body,
      userId: req.userId // This comes from the auth middleware
    });
    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.userId }).sort({ date: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete workout
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};