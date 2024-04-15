import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import { dbConnection } from './db/database.js';
import postRouter from './routes/postRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config({ path: './config/.env' });

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionSuccessStatus: 200
}

// Middleware
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get current directory path using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);

// DB
dbConnection();

export default app;
