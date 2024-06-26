import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { Post, getMyPosts, getallposts, getsinglepost } from '../controllers/postController.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

// Post Router
router.post("/post", isAuthenticated, upload.single('postimage'), Post);

// Get All Posts
router.get("/getall", getallposts);

// Post Details
router.get("/:id", isAuthenticated, getsinglepost);

// My Posts
router.get("/getmyposts", isAuthenticated, getMyPosts);

export default router;
