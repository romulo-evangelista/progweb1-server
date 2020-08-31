import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// Session
routes.post('/sessions', SessionController.create);
routes.delete('/sessions/:id', SessionController.destroy);

// Clients
routes.get('/clients', authMiddleware, UserController.list);
routes.get('/clients/:id', authMiddleware, UserController.findOne);
routes.post('/clients', UserController.create);
routes.put('/clients/:id', authMiddleware, UserController.update);
routes.delete('/clients/:id', authMiddleware, UserController.delete);

export default routes;