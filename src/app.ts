import 'express-async-errors';
import express, { Application } from 'express';
import userRouter from './routes/users.routes';
import handleErrorMiddleware from './middlewares/handleError.middleware';

export const app: Application = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(handleErrorMiddleware);
