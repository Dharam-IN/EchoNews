import express from 'express';
import { Login, Register } from '../controllers/userContoller.js';

const router = express.Router();

// Register Router
router.post("/register", Register);

// Login Router
router.post("/login", Login);

export default router;