// backend/src/controllers/goal.controller.js
import Goal from '../models/goal.model.js';

// Get all goals for a user
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.userId });
    res.json(goals);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create a new goal
export const createGoal = async (req, res) => {
  try {
    const goal = new Goal({
      ...req.body,
      userId: req.userId
    });
    const newGoal = await goal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update goal progress
export const updateGoal = async (req, res) => {
  try {
    const goal = await Goal.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!goal) return res.status(404).json({ message: 'Goal not found' });
    res.json(goal);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete goal
export const deleteGoal = async (req, res) => {
  try {
    const goal = await Goal.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    if (!goal) return res.status(404).json({ message: 'Goal not found' });
    res.json({ message: 'Goal deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};