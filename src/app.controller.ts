import { Body, Controller, Get, Param, Post, All } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':number')
  getNumber(@Param('number') number: any) : number | string {
    return this.appService.getNumber(number);
  }
  
  @Post('user-data')
  getUserData(@Body() data: any) : any {
    return this.appService.getUserData(data);
  }

  @All('*')
  catchAll(): string {
    return 'inaccesible';
  }
}
