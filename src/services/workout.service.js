// src/services/workout.service.js
const BASE_URL = 'http://localhost:3000/api/workouts';

export const WorkoutService = {
  // Get all workouts
  async getWorkouts() {
    const token = localStorage.getItem('token');
    const response = await fetch(BASE_URL, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json();
  },

  // Create workout
  async createWorkout(workoutData) {
    const token = localStorage.getItem('token');
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(workoutData)
    });
    return response.json();
  },

  // Update workout
  async updateWorkout(id, workoutData) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(workoutData)
    });
    return response.json();
  },

  // Delete workout
  async deleteWorkout(id) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.json();
  }
};