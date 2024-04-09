import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import { dbConnection } from './db/database.js';
import postRouter from './routes/postRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({path: './config/.env'});

const app = express();

// Middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);

// DB
dbConnection();

export default app;
