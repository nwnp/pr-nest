import { PostsRepository } from './repository/posts.repository';
import { Module, forwardRef } from '@nestjs/common';
import { PostController } from './Controllers/post.controller';
import { PostService } from './Services/post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostsSchema } from './posts.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostsSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [PostController],
  providers: [PostService, PostsRepository],
  exports: [PostsRepository, PostService],
})
export class PostModule {}
