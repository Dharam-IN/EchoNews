import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { Post, getallposts } from '../controllers/postController.js';

const router = express.Router();

// Post Router
router.post("/post", isAuthenticated, Post);

// Get All Posts
router.get("/getall", getallposts);

export default router;