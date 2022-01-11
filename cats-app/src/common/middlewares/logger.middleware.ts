import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `ip ${req.ip}  , originalUrl : ${req.originalUrl} , method: ${req.method}, statusCode : ${res.statusCode}`,
      );
    });
    next();
  }
}
