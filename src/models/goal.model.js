// src/models/goal.model.js
import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: String,
  type: {
    type: String,
    required: true,
    enum: ['weight', 'strength', 'cardio', 'endurance', 'flexibility']
  },
  targetValue: {
    type: Number,
    required: true
  },
  currentValue: {
    type: Number,
    default: 0
  },
  deadline: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['in-progress', 'completed', 'failed'],
    default: 'in-progress'
  }
}, {
  timestamps: true
});

const Goal = mongoose.model('Goal', goalSchema);
export default Goal;