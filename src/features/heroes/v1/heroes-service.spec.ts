import { Test, TestingModule } from '@nestjs/testing';
import { HeroesService } from './heroes-service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Hero } from '../../../model/heroes/hero';
import { HeroesRepository } from './heroes-repository';

const JestRepository = jest.fn(() => ({
  data: {},
}));

describe('HeroesService', () => {
  let provider: HeroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HeroesService,
        HeroesRepository,
        { provide: getRepositoryToken(Hero), useFactory: JestRepository },
      ],
    }).compile();

    provider = module.get<HeroesService>(HeroesService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
