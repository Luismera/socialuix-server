import { Request, Response } from 'express';
import { TokenData } from '../..';
import {
  commentFeed,
  deleteFeed,
  listFeed,
  saveFeed,
  updateFeed,
} from '../core/interactors';

export const createFeedController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body, tokenData } = req;
    const { userId }: any = tokenData;
    const { content } = body;
    const resp = await saveFeed({
      content,
      user: userId,
      comments: [],
    });
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};

export const listFeedController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const resp = await listFeed();
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};

export const deleteFeedController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { params } = req;
    const { id } = params;
    const resp = await deleteFeed(id);
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};

export const updateFeedController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body, params, tokenData } = req;
    const { userId }: any = tokenData;
    const { id } = params;
    const { content } = body;
    const resp = await updateFeed(id, { content, user: userId });
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};

export const commentFeedController = async (
  req: Request,
  res: Response,
  next: Function,
): Promise<Response> => {
  try {
    const { body, params, tokenData } = req;
    const { userId }: any = tokenData;
    const { id } = params;
    const { content, parent } = body;
    const resp = await commentFeed(id, {
      content,
      user: userId,
      parent,
    });
    return res.json(resp);
  } catch (error) {
    return next(error);
  }
};
