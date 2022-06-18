import { PostsRepository } from './repository/posts.repository';
import { Module } from '@nestjs/common';
import { PostController } from './Controllers/post.controller';
import { PostService } from './Services/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostsSchema } from './posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostsSchema }]),
  ],
  controllers: [PostController],
  providers: [PostService, PostsRepository],
})
export class PostModule {}
