import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from '@iscssoft/util';

const type = (process.env.TYPEORM_CONNECTION as any) || 'postgres';

export const withCache: TypeOrmModuleOptions = {
  type,
  host: '127.0.0.1',
  port: type === 'postgres' ? 5455 : 3316,
  username: type === 'mysql' ? 'iscssoft_crud' : 'root',
  password: type === 'mysql' ? 'iscssoft_crud' : 'root',
  database: 'iscssoft_crud',
  synchronize: false,
  logging: !isNil(process.env.TYPEORM_LOGGING) ? !!parseInt(process.env.TYPEORM_LOGGING, 10) : true,
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
