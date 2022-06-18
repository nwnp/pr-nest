import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PostCreateDto } from '../dto/posts.create.dto';
import { PostService } from '../Services/post.service';

@Controller('post')
@UseFilters(HttpExceptionFilter)
export class PostController {
  constructor(private readonly postsService: PostService) {}

  @Get()
  getAll() {
    return this.postsService.getAll();
  }

  @Post('/create')
  create(@Body() body: PostCreateDto) {
    console.log(body);
    return this.postsService.create(body);
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
