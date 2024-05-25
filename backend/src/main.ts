import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import {
  HttpExceptionFilter,
  TransformInterceptor,
} from './common/middleware/httpExceptionHandler';

async function bootstrap() {
  const env = dotenv.config().parsed;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
  });
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(env.PORT);
}
bootstrap();
