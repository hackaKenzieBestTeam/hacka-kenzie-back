import { Router } from 'express';
import * as c from '../controllers/users.controllers';
import * as md from '../middlewares';
import {
  createUserRequestSchema,
  loginUserRequestSchema,
  updateUserRequestSchema
} from '../schemas/users.schemas';

const userRouter = Router();

userRouter.post(
  '/register',
  md.validateRequestBodyMiddleware(createUserRequestSchema),
  md.verifyDuplicatedCpfEmailOrUsername,
  c.createUserController
);

userRouter.post(
  '/auth',
  md.validateRequestBodyMiddleware(loginUserRequestSchema),
  c.loginUserController
);

userRouter.get('/profile', md.authenticationMiddleware, c.getUserController);

userRouter.patch(
  '/update',
  md.authenticationMiddleware,
  md.validateRequestBodyMiddleware(updateUserRequestSchema),
  md.verifyDuplicatedCpfEmailOrUsername,
  c.updateUserController
);
export default userRouter;
