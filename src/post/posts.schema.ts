import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Document } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Post extends Document {
  @ApiProperty({
    example: '제목',
    description: 'title',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: '게시글 내용',
    description: 'content',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @Prop({
    default: 0,
    required: true,
  })
  @IsPositive()
  likeCount: number;

  // @Prop({
  //   type: Types.ObjectId,
  //   required: true,
  //   ref: 'users',
  // })
  // @IsNotEmpty()
  // user: Types.ObjectId
}

export const PostsSchema = SchemaFactory.createForClass(Post);
