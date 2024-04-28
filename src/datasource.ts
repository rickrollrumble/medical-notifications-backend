import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/browser';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'medman-admin',
    entities: ['src/models/entities/**/*.ts'],
    migrations: ['migrations/**/*.ts'],
};

export default new DataSource(dataSourceOptions);
