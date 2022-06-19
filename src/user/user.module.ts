import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controller';
import { UsersRepository } from './repository/users.repository';
import { UserService } from './services/user.service';
import { User, UsersSchema } from './users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, UsersRepository],
})
export class UserModule {}
