import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hero } from '../../../model/heroes/hero';

@Injectable()
export class HeroesRepository {
  constructor(
    @InjectRepository(Hero)
    private driver: Repository<Hero>,
  ) {}

  getAll(): Promise<Hero[]> {
    return this.driver.find();
  }

  getById(id: string): Promise<Hero | undefined> {
    return this.driver.findOne(id);
  }

  async create(hero: Hero): Promise<string | undefined> {
    const heroInserted = await this.driver.save(hero);
    return heroInserted.id;
  }

  async update(hero: Hero): Promise<void> {
    await this.driver.save(hero);
  }

  async delete(hero: Hero): Promise<void> {
    await this.driver.remove(hero);
  }
}
