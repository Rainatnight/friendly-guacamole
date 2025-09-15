import { Controller, Get, Post, Param, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    console.log('here');
    return [{ id: 1, name: 'John' }];
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return { id, name: 'John' };
  }

  @Post()
  create(@Body() body: { name: string }) {
    return { id: 2, ...body };
  }
}
