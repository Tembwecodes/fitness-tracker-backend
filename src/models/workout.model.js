// src/models/workout.model.js
import mongoose from 'mongoose';

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
  exercises: [{
    name: String,
    sets: Number,
    reps: Number,
    weight: Number
  }],
  notes: String
}, {
  timestamps: true
});

const Workout = mongoose.model('Workout', workoutSchema);
export default Workout;