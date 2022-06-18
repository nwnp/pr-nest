import { PostsRepository } from './../repository/posts.repository';
import { Injectable } from '@nestjs/common';
import { PostCreateDto } from '../dto/posts.create.dto';

@Injectable()
export class PostService {
  constructor(private readonly postsRepository: PostsRepository) {}

  getAll() {
    return '모든 게시글을 반환';
  }

  create(body: PostCreateDto) {
    const { title, content } = body;
    return this.postsRepository.create(body);
  }

  detail() {
    return '게시글 세부사항';
  }

  remove() {
    return '게시글 삭제';
  }

  update() {
    return '게시글 수정';
  }
}
