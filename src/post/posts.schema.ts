import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Posts extends Document {
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;

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

export const PostsSchema = SchemaFactory.createForClass(Posts);
