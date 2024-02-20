import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { UsersModule } from './users/users.module';
import { ModelsModule } from './models/models.module';
import { LoginModule } from './login/login.module';
import { LoginMiddleware } from './login/login.middleware';
import { AuthMiddleware } from './auth/auth.middleware';
import { UsersController } from './users/users/users.controller';

@Module({
  imports: [AppModule, UsersModule, ModelsModule, LoginModule],
  controllers: [AppController, HomeController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoginMiddleware)
      .forRoutes('')
      .apply(AuthMiddleware)
      .forRoutes(UsersController, AppController);
  }
}
