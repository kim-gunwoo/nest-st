import * as express from "express";
import catsRouter from "./cats/cats.route";

// singleton pattern
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // logging middleware
    this.app.use((req, res, next) => {
      console.log("middleware");
      next();
    });

    // json middleware
    this.app.use(express.json());

    this.setRoute();

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log("middleware error");
      res.send({ error: 404 });
    });
  }

  public listen() {
    const port: number = 8088;
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
