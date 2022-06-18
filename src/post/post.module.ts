import { Module } from '@nestjs/common';
import { PostController } from './Controllers/post.controller';
import { PostService } from './Services/post.service';

@Module({
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
