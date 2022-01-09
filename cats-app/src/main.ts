import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
import * as expressBasicAuth from 'express-basic-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(
    ['/docs'],
    expressBasicAuth({
      challenge: true,
      users: {
        [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Title')
    .setDescription('description')
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        description: 'jwt 입력, format: Bearer <JWT>',
        name: 'Authorization',
        bearerFormat: 'JWT',
        type: 'http',
        scheme: 'Bearer',
        in: 'Header',
      },
      'AccessToken',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors({
    // origin: ['http://localhost:3000'],
    origin: true,
    credentials: true,
  });

  await app.listen(port);
}
bootstrap();
