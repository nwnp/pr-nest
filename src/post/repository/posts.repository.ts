import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { PostCreateDto } from '../dto/posts.create.dto';
import { Post } from '../posts.schema';

@Injectable()
export class PostsRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: PostCreateDto) {
    return await this.postModel.create(data);
  }

  async getAll() {
    return await this.postModel.find();
  }

  async detail(id: Types.ObjectId) {
    const post = await this.postModel.findById(id);
    if (!post) {
      throw new HttpException('존재하지 않는 게시글입니다.', 400);
    }
    return post;
  }
}
