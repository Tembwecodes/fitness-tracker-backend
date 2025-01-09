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
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    required: true,
    enum: ['weight', 'strength', 'endurance', 'flexibility', 'other']
  },
  targetDate: {
    type: Date,
    required: true
  },
  target: {
    type: Number,
    required: true
  },
  currentProgress: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['in-progress', 'completed', 'abandoned'],
    default: 'in-progress'
  }
}, {
  timestamps: true
});

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;