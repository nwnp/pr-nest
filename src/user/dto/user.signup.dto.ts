import { PickType } from '@nestjs/swagger';
import { User } from '../users.schema';

export class UserSignupDto extends PickType(User, [
  'email',
  'nickname',
  'password',
  'age',
  'role',
] as const) {}
