import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { AwsService } from './aws.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODG_URL),
    CatsModule,
    AuthModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, AwsService],
})
export class AppModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;

  configure(cunsumer: MiddlewareConsumer) {
    cunsumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', this.isDev);
  }
}
