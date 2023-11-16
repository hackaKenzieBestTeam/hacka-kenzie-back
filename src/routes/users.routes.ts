import { Router } from 'express';
import * as c from '../controllers/users.controllers';
import * as md from '../middlewares';
import * as s from '../schemas/users.schemas';

const userRouter = Router();

userRouter.post(
  '/register',
  md.validateRequestBodyMiddleware(s.createUserRequestSchema),
  md.verifyDuplicatedCpfEmailOrUsername,
  c.createUserController
);

userRouter.post(
  '/auth',
  md.validateRequestBodyMiddleware(s.loginUserRequestSchema),
  c.loginUserController
);

userRouter.get('/profile', md.authenticationMiddleware, c.getUserController);

userRouter.patch(
  '/update',
  md.authenticationMiddleware,
  md.validateRequestBodyMiddleware(s.updateUserRequestSchema),
  md.verifyDuplicatedCpfEmailOrUsername,
  c.updateUserController
);

userRouter.delete(
  '/delete',
  md.authenticationMiddleware,
  c.deleteUserController
);

export default userRouter;
