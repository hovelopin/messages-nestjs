import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // 모든 요청을 검증한다. ( validation pipe 연결 )
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
