import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { UsersModule } from './users/users.module';
import { ModelsModule } from './models/models.module';

@Module({
  imports: [AppModule, UsersModule, ModelsModule],
  controllers: [AppController, HomeController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
