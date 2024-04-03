import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import { dbConnection } from './db/database.js';

dotenv.config({path: './config/.env'});

const app = express();

// Middleware
app.use(express.json());

app.use("/api/v1/user", userRouter);

// DB
dbConnection();

export default app;
