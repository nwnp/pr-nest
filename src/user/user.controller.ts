import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  get(): object {
    return this.userService.get();
  }

  @Post('signup')
  signup(@Body() userData: string): object {
    return this.userService.signup(userData);
  }
}
