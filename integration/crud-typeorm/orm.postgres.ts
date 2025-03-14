import { DataSource } from 'typeorm';

exports.default = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5455,
  username: 'root',
  password: 'root',
  database: 'iscssoft_crud',
  entities: ['./**/*.entity.ts'],
  migrationsTableName: 'orm_migrations',
  migrations: ['./seeds.ts'],
});
