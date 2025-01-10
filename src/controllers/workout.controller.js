// src/controllers/workout.controller.js
import Workout from '../models/workout.model.js';

// Get all workouts for a user
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.userId }).sort({ date: -1 });
    res.json(workouts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new workout
export const createWorkout = async (req, res) => {
  try {
    const workout = new Workout({
      ...req.body,
      userId: req.userId
    });
    const newWorkout = await workout.save();
    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single workout
export const getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOne({ _id: req.params.id, userId: req.userId });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a workout
export const updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a workout
export const deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json({ message: 'Workout deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};