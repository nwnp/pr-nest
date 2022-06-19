import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { UsersRepository } from './../repository/users.repository';
import * as bcrypt from 'bcrypt';
import {
  ForbiddenException,
  Injectable,
  HttpException,
  UseFilters,
} from '@nestjs/common';
import { UserSignupDto } from '../dto/user.signup.dto';

@Injectable()
@UseFilters(HttpExceptionFilter)
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async signup(userData: UserSignupDto) {
    const { nickname, email, password, age, role } = userData;
    // 있는지 없는지 확인
    const isUserExist = await this.usersRepository.existByEmail(email);
    if (isUserExist) {
      throw new HttpException('이미 존재하는 이메일입니다.', 400);
    }

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const user = await this.usersRepository.signup({
      email,
      nickname,
      password: hashedPassword,
      age,
      role,
    });

    return user;
  }

  detail(id) {
    if (id === 1) {
      return {
        result: {
          id: 1,
          nickname: 'pa12',
          email: 'ujmn0418@gmail.com',
          address: 'Incheon',
          role: 'admin',
        },
      };
    } else {
      return {
        result: {
          id: 2,
          nickname: '걸레',
          email: '예지@입보지.com',
          address: 'Incheon',
          role: '내 전용 좆집',
        },
      };
    }
  }

  get(): object {
    // test code
    const temp = 2;
    if (temp % 2 == 1) {
      throw new ForbiddenException();
    }
    return {
      result: {
        id: 1,
        nickname: 'pa12',
        email: 'ujmn0418@gmail.com',
        address: 'Incheon',
        role: 'admin',
      },
    };
  }
}
