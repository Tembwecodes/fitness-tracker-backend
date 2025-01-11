// src/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import authRoutes from './routes/auth.routes.js';
import workoutRoutes from './routes/workout.routes.js';  // Add this
import goalRoutes from './routes/goal.routes.js';

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/goals', goalRoutes);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/workouts', workoutRoutes);  // Add this

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});