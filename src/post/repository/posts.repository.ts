import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostCreateDto } from '../dto/posts.create.dto';
import { Post } from '../posts.schema';

@Injectable()
export class PostsRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: PostCreateDto) {
    return await this.postModel.create(data);
  }
}
