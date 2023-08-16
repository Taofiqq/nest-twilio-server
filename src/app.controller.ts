import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('call')
  async initiateCall(@Body() body: any) {
    const { to, from } = body;
    return this.appService.initiateCall(to, from);
  }
}
