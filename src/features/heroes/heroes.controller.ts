import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Hero } from '../shared/hero';
import { HeroesService } from './heroes.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async getAll(): Promise<Hero[]> {
    return this.heroesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Hero> {
    const hero = this.heroesService.getById(id);

    if (!hero) {
      throw new NotFoundException('Hero not found');
    }

    return hero;
  }

  @Post()
  async create(@Body() hero: Hero): Promise<Hero> {
    return this.heroesService.create(hero);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() hero: Hero,
  ): Promise<Hero | undefined> {
    hero.id = id;
    const heroUpdated = this.heroesService.update(hero);

    if (!heroUpdated) {
      throw new NotFoundException('Hero not found');
    }

    return heroUpdated;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const index = this.heroesService.delete(id);

    if (index < 0) {
      throw new NotFoundException('Hero not found');
    }
  }
}
