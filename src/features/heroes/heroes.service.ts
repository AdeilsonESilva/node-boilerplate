import { Injectable } from '@nestjs/common';
import { Hero } from '../shared/hero';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HeroesService {
  heroes: Hero[] = [];

  getAll(): Hero[] {
    return this.heroes;
  }

  getById(id: string): Hero | undefined {
    const hero = this.heroes.find((item) => item.id === id);
    return hero;
  }

  create(hero: Hero): Hero {
    hero.id = uuidv4();
    hero.created_at = new Date().getTime();
    hero.updated_at = new Date().getTime();
    this.heroes.push(hero);

    return hero;
  }

  update(hero: Hero): Hero | undefined {
    const heroFound = this.getById(hero.id);
    if (!heroFound) {
      return undefined;
    }

    heroFound.enabled = hero.enabled;
    heroFound.name = hero.name;
    heroFound.power_stats_id = hero.power_stats_id;
    heroFound.race = hero.race;
    heroFound.updated_at = new Date().getDate();

    return heroFound;
  }

  delete(id: string): number {
    const index = this.heroes.findIndex((item) => item.id === id);
    this.heroes.splice(index, 1);
    return index;
  }
}
