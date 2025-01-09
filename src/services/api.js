// src/services/api.js
const BASE_URL = 'http://localhost:3000/api';

// Auth services
export const authService = {
  async register(userData) {
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Registration failed');
      return response.json();
    } catch (error) {
      throw error;
    }
  },

  async login(credentials) {
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      throw error;
    }
  },

  logout() {
    localStorage.removeItem('token');
  }
};

// Protected API calls helper
const fetchWithAuth = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const config = {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, config);
  if (!response.ok) throw new Error('API request failed');
  return response.json();
};

// Workout services
export const workoutService = {
  async getWorkouts() {
    return fetchWithAuth('/workouts');
  },

  async createWorkout(workoutData) {
    return fetchWithAuth('/workouts', {
      method: 'POST',
      body: JSON.stringify(workoutData),
    });
  },

  async updateWorkout(id, workoutData) {
    return fetchWithAuth(`/workouts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(workoutData),
    });
  },

  async deleteWorkout(id) {
    return fetchWithAuth(`/workouts/${id}`, {
      method: 'DELETE',
    });
  }
};

// Goal services
export const goalService = {
  async getGoals() {
    return fetchWithAuth('/goals');
  },

  async createGoal(goalData) {
    return fetchWithAuth('/goals', {
      method: 'POST',
      body: JSON.stringify(goalData),
    });
  },

  async updateGoal(id, goalData) {
    return fetchWithAuth(`/goals/${id}`, {
      method: 'PUT',
      body: JSON.stringify(goalData),
    });
  },

  async deleteGoal(id) {
    return fetchWithAuth(`/goals/${id}`, {
      method: 'DELETE',
    });
  }
};