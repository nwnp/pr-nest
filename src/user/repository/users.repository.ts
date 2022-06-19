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

  async findUserById(userId: string) {
    try {
      return await this.userModel.findById(userId).select('-password');
    } catch (error) {
      throw new HttpException('DB Error', 500);
    }
  }

  async signup(userData: UserSignupDto) {
    try {
      return await this.userModel.create(userData);
    } catch (error) {
      throw new HttpException('DB Error', 500);
    }
  }

  async existByEmail(email: string) {
    try {
      return await this.userModel.findOne({ email });
    } catch (error) {
      throw new HttpException('DB Error', 500);
    }
  }
}
