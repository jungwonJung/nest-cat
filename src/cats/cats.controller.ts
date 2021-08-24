import {
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

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post()
  async signUp() {
    return;
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
