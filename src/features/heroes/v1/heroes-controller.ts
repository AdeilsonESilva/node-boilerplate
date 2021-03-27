import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateHeroRequest } from 'src/model/heroes/create-hero-request';
import { Hero } from 'src/model/heroes/hero';
import { UpdateHeroRequest } from 'src/model/heroes/update-hero-request';
import { HeroesService } from './heroes-service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async getAll(): Promise<Hero[]> {
    return this.heroesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Hero> {
    return this.heroesService.getById(id);
  }

  @Post()
  async create(@Body() hero: CreateHeroRequest, @Res() res: Response) {
    const id = await this.heroesService.create(hero);

    res.set('Location', `/api/heroes/${id}`);
    return res.send();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() hero: UpdateHeroRequest,
    @Res() res: Response,
  ) {
    try {
      await this.heroesService.update(id, hero);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).send(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() res: Response) {
    try {
      await this.heroesService.delete(id);
      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).send(error);
    }
  }
}
