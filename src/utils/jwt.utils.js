// src/utils/jwt.utils.js
import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
  try {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
  } catch (error) {
    throw new Error('Error generating token');
  }
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};