import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeroesModule } from './features/heroes/v1/heroes-module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import ormconfig = require('./config/database/ormconfig');
@Module({
  imports: [
    HeroesModule,
    TypeOrmModule.forRoot(ormconfig[0]), //default
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
