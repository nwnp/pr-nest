import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { Injectable, UseFilters, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users.schema';
import { Model } from 'mongoose';
import { UserSignupDto } from '../dto/user.signup.dto';

@Injectable()
@UseFilters(HttpExceptionFilter)
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async signup(userData: UserSignupDto) {
    return await this.userModel.create(userData);
  }

  async existByEmail(email: string) {
    try {
      const result = await this.userModel.findOne({ email });
      return result;
    } catch (error) {
      throw new HttpException('DB Error', 500);
    }
  }
}
