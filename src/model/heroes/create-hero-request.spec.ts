import { CreateHeroRequest } from './create-hero-request';

describe('CreateHeroRequest', () => {
  it('should be defined', () => {
    expect(new CreateHeroRequest('Create Name Test', 'HUMAN')).toBeDefined();
  });
});
