import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('home')
export class HomeController {
  constructor(private readonly appService: AppService) {}
  @Get()
  public async home() {
    return this.appService.getHello();
  }

  @Post('/about')
  public async about() {
    return { message: 'About page' };
  }
}
