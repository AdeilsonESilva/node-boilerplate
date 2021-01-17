import { Test, TestingModule } from '@nestjs/testing';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let provider: HeroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeroesService],
    }).compile();

    provider = module.get<HeroesService>(HeroesService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
