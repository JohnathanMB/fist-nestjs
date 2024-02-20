import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request received', req.method, req.url);
    next();
  }
}
