import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeController } from './home/home.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';

@Module({
  imports: [AppModule],
  controllers: [AppController, HomeController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
