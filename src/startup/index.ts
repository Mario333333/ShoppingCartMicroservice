import express, { Express, Router as ExpressRouter } from 'express';
import { Config } from '../utils/config'; 

let _express: Express;
let _config: Config;

export class Server {
  constructor({ Config, Router }: { Config: Config, Router: ExpressRouter }) {
    _express = express();
    _express.use(Router);
    _config = Config;
  }

  start(): Promise<void> {
    return new Promise<void>((resolve) => {
      _express.listen(_config.PORT, () => {
        console.log(
          `${_config.APPLICATION_NAME} running on port ${_config.PORT}`
        );
        resolve();
      });
    });
  }
}

export default Server;