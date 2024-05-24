import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import 'reflect-metadata';

async function bootstrap() {
  const env = dotenv.config().parsed;
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT);
}
bootstrap();
