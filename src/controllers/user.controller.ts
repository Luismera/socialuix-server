import { Request, Response } from 'express';
import {
  forgotUser,
  signin,
  signup,
  updatePasswordUser,
} from '../core/interactors';

export const signinController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body } = req;
    const { email, password } = body;
    const user = await signin(email, password);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const signupController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body } = req;
    const { name, email, password } = body;
    const user = await signup({ name, email, password });
    return res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const forgotUserController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body } = req;
    const { email } = body;
    const resp = await forgotUser(email);
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};

export const updatePasswordUserController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body, tokenData } = req;
    const { userId }: any = tokenData;
    const { password } = body;
    const resp = await updatePasswordUser(userId, password);
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};
