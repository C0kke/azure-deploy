import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':number')
  getNumber(@Param('number') number: number) : number {
    return this.appService.getNumber(number);
  }
  
  @Post('user-data')
  getUserData(@Body() data: any) : string {
    return this.appService.getUserData(data);
  }
}
