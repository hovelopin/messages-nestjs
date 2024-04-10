import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// class decorator
@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DONT DO THIS ON REAL APP
    this.messagesService = new MessagesService();
  }
  // method decorator
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  // Body , Param => argument decorator
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log('body', body);
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log('id', id);
    return this.messagesService.findOne(id);
  }
}
