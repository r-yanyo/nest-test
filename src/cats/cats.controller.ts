import { Controller, Get, Post, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return `This action returns a #${id} cat`;
  }
}
