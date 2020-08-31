import express from 'express';
import cors from 'cors';

import connection from './database/connection';
import routes from './routes';

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  database() {
    connection.authenticate()
      .then(() => console.log("conectado!"))
      .catch((err) => console.log(err))
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;