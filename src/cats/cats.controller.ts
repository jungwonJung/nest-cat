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
  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(SuccessInterceptor)
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'all cat';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }
}
