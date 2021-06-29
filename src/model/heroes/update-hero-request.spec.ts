import { UpdateHeroRequest } from './update-hero-request';

describe('UpdateHeroRequest', () => {
  it('should be defined', () => {
    expect(new UpdateHeroRequest('Update Name Test', 'ALIEN')).toBeDefined();
  });
});
