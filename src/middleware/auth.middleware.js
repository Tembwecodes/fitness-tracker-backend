// src/middleware/auth.middleware.js
import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils/jwt.utils.js';

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ message: 'Not authorized - No token' });
    }

    const decoded = verifyToken(token);
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized - Invalid token' });
  }
};