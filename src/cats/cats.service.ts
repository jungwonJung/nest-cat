import {
  HttpException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';
import * as bcrypt from 'bcrypt';
import { CatsRepository } from './cats.repository';

@Injectable()
export class CatsService {
  constructor(private readonly catsRepositoy: CatsRepository) {}

  async signUp(body: CatRequestDto) {
    const { email, name, password } = body;
    const isCatExist = await this.catsRepositoy.existsByEmail(email);

    if (isCatExist) {
      throw new UnauthorizedException('이미 존재하는 고앵쓰');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const cat = await this.catsRepositoy.create({
      email,
      name,
      password: hashedPassword,
    });
    return cat.readOnlyData;
  }
}
