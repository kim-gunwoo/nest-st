import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type || 'postgres',
  host: process.env.DB_HOST || dbConfig.host || 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME || dbConfig.username || 'gimgeon-u',
  password: process.env.DB_PASSWORD || dbConfig.password || 'postgres',
  database: dbConfig.database || 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize || true,
  logging: true,
};
