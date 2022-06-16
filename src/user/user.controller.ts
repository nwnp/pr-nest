import { HttpExceptionFilter } from './../common/exceptions/http-exception.filter';
import { UserService } from './user.service';
import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseFilters(new HttpExceptionFilter())
  get(): object {
    return this.userService.get();
  }

  @Post('signup')
  signup(@Body() userData: string): object {
    return this.userService.signup(userData);
  }
}
