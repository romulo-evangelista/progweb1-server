import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';

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

// Products
routes.get('/products', ProductController.list);
routes.get('/products/:id', ProductController.findOne);
routes.post('/products', authMiddleware, ProductController.create);
routes.put('/products/:id', authMiddleware, ProductController.update);
routes.delete('/products/:id', authMiddleware, ProductController.delete);

// Categories
routes.get('/categories', CategoryController.list);
routes.get('/categories/:id', CategoryController.findOne);
routes.post('/categories', authMiddleware, CategoryController.create);
routes.put('/categories/:id', authMiddleware, CategoryController.update);
routes.delete('/categories/:id', authMiddleware, CategoryController.delete);

export default routes;