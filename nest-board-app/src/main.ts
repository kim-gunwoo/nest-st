import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  // const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const serverConfig = config.get('server');
  const port = serverConfig.port || 3003;

  await app.listen(port);
  Logger.log(`🚀 Application running on port : ${port}`);
}
bootstrap();
