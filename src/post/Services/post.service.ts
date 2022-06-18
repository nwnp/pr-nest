import { Types } from 'mongoose';
import { PostsRepository } from './../repository/posts.repository';
import { Injectable, Type } from '@nestjs/common';
import { PostCreateDto } from '../dto/posts.create.dto';
import { PostUpdateDto } from '../dto/post.update.dto';

@Injectable()
export class PostService {
  constructor(private readonly postsRepository: PostsRepository) {}

  getAll() {
    return this.postsRepository.getAll();
  }

  create(body: PostCreateDto) {
    return this.postsRepository.create(body);
  }

  detail(id: Types.ObjectId) {
    return this.postsRepository.detail(id);
  }

  remove(id: Types.ObjectId) {
    return this.postsRepository.delete(id);
  }

  update(id: Types.ObjectId, body: PostUpdateDto) {
    return this.postsRepository.update(id, body);
  }
}
