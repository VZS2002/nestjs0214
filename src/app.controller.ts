import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { Tarhely } from './entities/tarhelySzolgaltatas.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Get('tarhely')
  async listTarhely() {
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    return await tarhelyRepo.find();
  }

  @Post('tarhely')
  newTarhely(@Body() tarhely: Tarhely) {
    tarhely.id = undefined;
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    tarhelyRepo.save(tarhely);
  }

  @Delete('tarhely/:id')
  deleteTarhely(@Param('id') id: number) {
    const tarhelyRepo = this.dataSource.getRepository(Tarhely);
    tarhelyRepo.delete(id);
  }
}
