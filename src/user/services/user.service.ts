import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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

  signup(userData): object {
    return {
      result: {
        success: true,
        ...userData,
      },
    };
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
}
