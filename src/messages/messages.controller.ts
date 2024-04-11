import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// class decorator
@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
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
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
