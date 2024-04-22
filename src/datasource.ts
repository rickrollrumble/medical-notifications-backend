import { DataSource } from 'typeorm';

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'medman-admin',
    entities: ['src/models/entities/**/*.ts'],
    migrations: ['migrations/**/*.ts'],
});