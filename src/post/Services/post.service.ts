import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getAll() {
    return '모든 게시글을 반환';
  }

  create() {
    return '게시글 등록';
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
