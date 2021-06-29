import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { HeroesService } from './heroes-service';
import { Hero } from '../../../model/heroes/hero';
import { HeroesRepository } from './heroes-repository';
import { HeroesController } from './heroes-controller';
import { CreateHeroRequest } from '../../../model/heroes/create-hero-request';
// import { UpdateHeroRequest } from '../../../model/heroes/update-hero-request';

describe('HeroesController', () => {
  let controller: HeroesController;
  let service: HeroesService;
  // let repository: HeroesRepository;
  // let repositoryMock: Repository<Hero>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [
        // Repository,
        Hero,
        HeroesRepository,
        HeroesService,
        { provide: getRepositoryToken(Hero), useFactory: jest.fn },
      ],
    }).compile();

    // repositoryMock = module.get(getRepositoryToken(Hero));
    // repository = module.get<HeroesRepository>(HeroesRepository);
    service = module.get<HeroesService>(HeroesService);
    controller = module.get<HeroesController>(HeroesController);
  });

  it('should be defined', async () => {
    expect(controller).toBeInstanceOf(HeroesController);
  });

  it('should be get all heroes', async () => {
    const hero = new Hero();
    hero.id = '091a5954-2a97-4903-b990-8d3fd96ee67d';
    hero.name = 'Flavinho do pneu';
    hero.enabled = true;
    hero.created_at = Date.now();
    hero.updated_at = Date.now();
    hero.race = 'HUMAN';

    const result = [hero];
    jest.spyOn(service, 'getAll').mockImplementation(async () => result);

    const allHeroes = await controller.getAll();

    expect(allHeroes).toBe(result);
    expect(allHeroes[0].name).toBe('Flavinho do pneu');
  });

  it('should be get hero by id', async () => {
    const hero = new Hero();
    hero.id = '091a5954-2a97-4903-b990-8d3fd96ee67d';
    hero.name = 'Flavinho do pneu';
    hero.enabled = true;
    hero.created_at = Date.now();
    hero.updated_at = Date.now();
    hero.race = 'HUMAN';

    const result = hero;
    jest.spyOn(service, 'getById').mockImplementation(async () => result);

    const heroById = await controller.getById(
      '091a5954-2a97-4903-b990-8d3fd96ee67d',
    );

    expect(heroById).toBe(result);
    expect(heroById.name).toBe('Flavinho do pneu');
  });

  it('should be create hero', async () => {
    const result = '091a5954-2a97-4903-b990-8d3fd96ee67d';
    jest.spyOn(service, 'create').mockImplementation(async () => result);

    const heroId = await controller.create(
      new CreateHeroRequest('Hero', 'CYBORG'),
    );

    expect(heroId).toBe(result);
  });

  // it('should be update hero', async () => {
  //   jest.spyOn(service, 'update').mockImplementation(async () => {
  //     return;
  //   });

  //   await controller.update(
  //     '091a5954-2a97-4903-b990-8d3fd96ee67d',
  //     new UpdateHeroRequest('Hero', 'CYBORG'),
  //   );

  //   const hero = await controller.getById(
  //     '091a5954-2a97-4903-b990-8d3fd96ee67d',
  //   );

  //   expect(1).toBe(undefined);
  // });
});
