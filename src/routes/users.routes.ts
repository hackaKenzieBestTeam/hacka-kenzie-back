import { Router } from 'express';
import * as c from '../controllers/users.controllers';
import * as md from '../middlewares';
const userRouter = Router();

userRouter.post(
  '/register',
  md.verifyDuplicatedCpfEmailOrUsername,
  c.createUserController
);
userRouter.post('/auth', c.loginUserController);
userRouter.get('/profile', md.authenticationMiddleware, c.getUserController);

export default userRouter;
