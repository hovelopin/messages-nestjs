import { Controller, Get, Post, Body, Param } from '@nestjs/common';

// class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  listMessages() {
    console.log('hi');
  }

  // Body , Param => argument decorator
  @Post()
  createMessages(@Body() body: any) {
    console.log('body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
  }
}
