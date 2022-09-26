import { DataSource } from 'typeorm';
import 'reflect-metadata';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'local') {
  dotenv.config({ path: './env/local.env' });
}

const config = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 32771,
  username: 'postgres',
  password: 'postgres',
  database: 'nest',
  entities: [__dirname + './../../**/*.entity{.ts,.js}'],
  synchronize: true,
  schema: process.env.DATABASE_SCHEMA,
  migrationsRun: true,
  migrations: ['database/migrations/**/*{.ts,.js}'],
});

config
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

console.log(config);

export default config;
