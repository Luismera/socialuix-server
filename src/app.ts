import environment from './config/environment.config';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import routes from './routes';
import bodyParser from 'body-parser';
import morgan from 'morgan';

interface ErrorResponse {
  message: string;
  status: number;
}

export class Applicaction {
  app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    const multerMid = multer({
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    });
    this.app.disable('x-powered-by');
    this.app.use(morgan('dev'));
    this.app.use(multerMid.single('file'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(
      cors({
        origin: '*',
      }),
    );
  }

  routes() {
    this.app.use(routes);
    this.app.use(
      (err: ErrorResponse, req: Request, res: Response, next: any) => {
        res.status(err.status || 500).json({
          message: err.message || err,
        });
        next();
      },
    );
  }

  start(): void {
    this.app.listen(environment.port, () => {
      console.log(`Server on http://localhost:${environment.port}`);
    });
  }
}
