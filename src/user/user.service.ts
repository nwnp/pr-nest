import { ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get(): object {
    // test code
    const temp = 1;
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
}
