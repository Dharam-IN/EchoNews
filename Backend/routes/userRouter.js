import express from 'express';
import { Login, Logout, Register } from '../controllers/userContoller.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

// Register Router
router.post("/register", Register);

// Login Router
router.post("/login", Login);

// Logout Router
router.get("/logout", isAuthenticated, Logout);

export default router;