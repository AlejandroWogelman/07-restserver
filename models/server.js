import express from "express";
import cors from "cors";

import users from "../routes/user.routes.js";

export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = "/api/usuarios";

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares() {
    // cors
    this.app.use(cors());

    //Lectura y parseo del body
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersPath, users);
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log(`server running on port ${this.port}`)
    );
  }
}
