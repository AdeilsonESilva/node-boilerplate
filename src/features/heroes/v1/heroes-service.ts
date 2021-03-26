import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroRequest } from 'src/model/heroes/create-hero-request';
import { Hero } from 'src/model/heroes/hero';
import { UpdateHeroRequest } from 'src/model/heroes/update-hero-request';
import { HeroesRepository } from './heroes-repository';

@Injectable()
export class HeroesService {
  constructor(private heroesRepository: HeroesRepository) {}

  // heroes: Hero[] = [];

  async getAll(): Promise<Hero[]> {
    return await this.heroesRepository.getAll();
  }

  async getById(id: string): Promise<Hero> {
    const hero = await this.heroesRepository.getById(id);

    if (!hero) {
      throw new NotFoundException('Hero not found');
    }

    return hero;
  }

  async create(hero: CreateHeroRequest): Promise<string | undefined> {
    return await this.heroesRepository.create({
      name: hero.name,
      race: hero.race,
    });
  }

  async update(id: string, hero: UpdateHeroRequest): Promise<void> {
    const heroFound = await this.getById(id);

    heroFound.name = hero.name;
    heroFound.race = hero.race;

    await this.heroesRepository.update(heroFound);
  }

  async delete(id: string): Promise<void> {
    const heroFound = await this.getById(id);

    await this.heroesRepository.delete(heroFound);
  }
}
