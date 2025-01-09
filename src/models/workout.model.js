// src/models/workout.model.js
import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sets: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }
});

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['strength', 'cardio', 'flexibility', 'other']
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  duration: {
    type: Number,
    required: true
  },
  exercises: [exerciseSchema],
  notes: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;