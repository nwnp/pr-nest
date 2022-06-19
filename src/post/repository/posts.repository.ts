import { Injectable, HttpException, UseFilters } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PostUpdateDto } from '../dto/post.update.dto';
import { PostCreateDto } from '../dto/posts.create.dto';
import { Post } from '../posts.schema';

@Injectable()
@UseFilters(HttpExceptionFilter)
export class PostsRepository {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async create(data: PostCreateDto) {
    try {
      return await this.postModel.create(data);
    } catch (error) {
      throw new HttpException('db error', 500);
    }
  }

  async getAll() {
    try {
      return await this.postModel.find();
    } catch (error) {
      throw new HttpException('db error', 500);
    }
  }

  async detail(id: Types.ObjectId) {
    try {
      const post = await this.postModel.findById({ _id: id });
      if (!post) {
        throw new HttpException('존재하지 않는 게시글입니다.', 400);
      }
      return post;
    } catch (error) {
      throw new HttpException('db error', 500);
    }
  }

  async delete(id: Types.ObjectId) {
    try {
      const post = await this.postModel.findById(id);
      if (!post) {
        throw new HttpException('존재하지 않는 게시글입니다.', 400);
      }
      return await this.postModel.deleteOne({ _id: id });
    } catch (error) {
      throw new HttpException('db error', 500);
    }
  }

  async update(id: Types.ObjectId, data: PostUpdateDto) {
    try {
      const post = await this.postModel.findOne({ _id: id });
      if (!post) {
        throw new HttpException('존재하지 않는 게시글입니다.', 400);
      }
      const updatedPost = await this.postModel.update(
        { _id: id },
        { title: data.title, content: data.content },
      );
      return updatedPost;
    } catch (error) {
      throw new HttpException('db error', 500);
    }
  }
}
