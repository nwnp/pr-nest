import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Schema()
export class User extends Document {
  @ApiProperty({
    example: 'nwnp',
    description: '닉네임',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty({
    example: 'example@gmail.com',
    description: '이메일',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '******',
    description: '패스워드',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 29,
    description: '나이',
    required: true,
  })
  @IsNumber()
  @IsNotEmpty()
  age: number;
}

export const UsersSchema = SchemaFactory.createForClass(User);
