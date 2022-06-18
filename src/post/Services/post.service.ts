import { Types } from 'mongoose';
import { PostsRepository } from './../repository/posts.repository';
import { Injectable } from '@nestjs/common';
import { PostCreateDto } from '../dto/posts.create.dto';

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

  remove() {
    return '게시글 삭제';
  }

  update() {
    return '게시글 수정';
  }
}
