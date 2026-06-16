import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  registerUserSchema,
  loginUserSchema,
} from '../validations/authValidation.js';
import {
  registerUser,
  loginUser,
  refreshUserSession,
  logoutUser,
} from '../controllers/authController.js';

const authRouter = Router(); //створює екземпляр маршрутизатора для аутентифікації

authRouter.post(
  '/auth/register',
  celebrate(registerUserSchema, {
    abortEarly: false,
  }),
  registerUser,
);

authRouter.post(
  '/auth/login',
  celebrate(loginUserSchema, {
    abortEarly: false,
  }),
  loginUser,
);
authRouter.post('/auth/refresh', refreshUserSession);

authRouter.post('/auth/logout', logoutUser);

export default authRouter;
