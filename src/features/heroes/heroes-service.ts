import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHeroRequest } from 'src/model/heroes/create-hero-request';
import { Hero } from 'src/model/heroes/hero';
import { UpdateHeroRequest } from 'src/model/heroes/update-hero-request';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HeroesService {
  heroes: Hero[] = [];

  getAll(): Hero[] {
    return this.heroes;
  }

  getById(id: string): Hero {
    const hero = this.heroes.find((item) => item.id === id);

    if (!hero) {
      throw new NotFoundException('Hero not found');
    }

    return hero;
  }

  create(hero: CreateHeroRequest): string {
    const heroId = uuidv4();
    const newHero = new Hero(
      heroId,
      hero.name,
      true,
      new Date().getTime(),
      new Date().getTime(),
      hero.race,
    );

    this.heroes.push(newHero);

    return heroId;
  }

  update(id: string, hero: UpdateHeroRequest): void {
    const heroFound = this.getById(id);

    if (!heroFound) {
      throw new NotFoundException('Hero not found');
    }

    heroFound.name = hero.name;
    heroFound.race = hero.race;
    heroFound.updated_at = new Date().getTime();
  }

  delete(id: string): void {
    const index = this.heroes.findIndex((item) => item.id === id);

    if (index < 0) {
      throw new NotFoundException('Hero not found');
    }

    this.heroes.splice(index, 1);
  }
}
