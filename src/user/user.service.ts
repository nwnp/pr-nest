import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get(): object {
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
