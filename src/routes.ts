import { Router } from 'express';

import handleTokenBasedAuthentication from './middlewares/authentication.middleware';

import {
  signupController,
  signinController,
  forgotUserController,
  updatePasswordUserController,
} from './controllers/user.controller';
import {
  commentFeedController,
  createFeedController,
  deleteFeedController,
  listFeedController,
  updateFeedController,
} from './controllers/feed.controller';

const router = Router();

/** Ruta default */
router.get('/', (req, res) => {
  res.send('Hola mundo');
});

/** Rutas Usuarios */
router.post('/signup', signupController);
router.post('/signin', signinController);
router.post('/forgot', forgotUserController);
router.post(
  '/reset-password',
  handleTokenBasedAuthentication,
  updatePasswordUserController,
);

/** Rutas Feed */
router.post('/feed', handleTokenBasedAuthentication, createFeedController);
router.get('/feed', handleTokenBasedAuthentication, listFeedController);
router.delete(
  '/feed/:id',
  handleTokenBasedAuthentication,
  deleteFeedController,
);
router.put('/feed/:id', handleTokenBasedAuthentication, updateFeedController);
router.post(
  '/feed/:id/comment',
  handleTokenBasedAuthentication,
  commentFeedController,
);

export default router;
