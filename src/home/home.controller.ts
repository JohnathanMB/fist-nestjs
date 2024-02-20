import { Controller, Get } from '@nestjs/common';

@Controller('home')
export class HomeController {
  @Get()
  public async home() {
    return { message: 'Hello Home' };
  }
}
