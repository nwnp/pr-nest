import { UsersRepository } from './../user/repository/users.repository';
import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async jwtLogin(data: LoginRequestDto) {
    const { email, password } = data;
    const user = await this.usersRepository.existByEmail(email);
    if (!user) {
      throw new HttpException('이메일과 비밀번호를 다시 확인해주세요.', 401);
    }

    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!isPasswordValidated) {
      throw new HttpException('이메일과 비밀번호를 다시 확인해주세요.', 401);
    }

    const result = { email: email, id: user.id };
    return {
      token: this.jwtService.sign(result),
    };
  }
}
