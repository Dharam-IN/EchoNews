import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { Post } from '../controllers/postController.js';

const router = express.Router();

// Post Router
router.post("/post", isAuthenticated, Post)

export default router;