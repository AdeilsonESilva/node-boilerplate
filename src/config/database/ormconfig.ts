import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Hero } from 'src/model/heroes/hero';

export = [
  {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    // synchronize: true,
    schema: 'heroservice',
    logging: true,
    dropSchema: false,
    synchronize: false,
    migrationsRun: true,
    migrations: [join(__dirname, 'migration/*.js')],
    cli: {
      migrationsDir: 'src/model/migration',
    },
    entities: [Hero],
  } as TypeOrmModuleOptions,
];
