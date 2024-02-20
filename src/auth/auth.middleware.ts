import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const isAuthenticated = req.headers['auth'] === '123';
    if (!isAuthenticated) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  }
}
