import { Types } from 'mongoose';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PostCreateDto } from '../dto/posts.create.dto';
import { PostService } from '../Services/post.service';
import { PostUpdateDto } from '../dto/post.update.dto';

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
    return this.postsService.create(body);
  }

  @Get('/detail/:id')
  detail(@Param('id') id: Types.ObjectId) {
    return this.postsService.detail(id);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: Types.ObjectId) {
    return this.postsService.remove(id);
  }

  @Put('/update/:id')
  update(@Param('id') id: Types.ObjectId, @Body() body: PostUpdateDto) {
    return this.postsService.update(id, body);
  }
}
