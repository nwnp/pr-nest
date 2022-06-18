import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostService } from '../Services/post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postsService: PostService) {}

  @Get()
  getAll() {
    return this.postsService.getAll();
  }

  @Post('/create')
  create() {
    return this.postsService.create();
  }

  @Get('/detail/:id')
  detail() {
    return this.postsService.detail();
  }

  @Delete('/delete/:id')
  remove() {
    return this.postsService.remove();
  }

  @Put('/update/:id')
  update() {
    return this.postsService.update();
  }
}
