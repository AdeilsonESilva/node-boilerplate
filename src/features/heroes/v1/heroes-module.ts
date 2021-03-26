import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroesController } from './heroes-controller';
import { HeroesService } from './heroes-service';
import { Hero } from '../../../model/heroes/hero';
import { HeroesRepository } from './heroes-repository';
@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesRepository],
})
export class HeroesModule {}
