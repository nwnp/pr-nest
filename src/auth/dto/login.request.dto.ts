import { PickType } from '@nestjs/swagger';
import { User } from 'src/user/users.schema';

export class LoginRequestDto extends PickType(User, [
  'email',
  'password',
] as const) {}
