import { PickType } from '@nestjs/swagger';
import { Post } from '../posts.schema';

export class PostCreateDto extends PickType(Post, [
  'title',
  'content',
] as const) {}
