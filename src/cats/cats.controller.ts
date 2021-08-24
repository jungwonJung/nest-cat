import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'common/interceptors/success.interceptor';
import { CatsService } from './cats.service';
import { CatRequestDto } from './dto/cats.request.dto';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return;
  }

  @Post()
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @Post('login')
  logIn() {
    return;
  }

  @Post('logout')
  logOut() {
    return;
  }

  @Post('upload/cats')
  uploadCatImg() {
    return;
  }
}
