import { IsString } from 'class-validator';

export class PostUpdateDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
