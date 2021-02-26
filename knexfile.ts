import path from 'path';

module.exports = {
  client: 'postgres',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    schemaName: 'heroservice',
  },
};