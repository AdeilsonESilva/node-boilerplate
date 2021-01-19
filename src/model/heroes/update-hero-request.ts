export class UpdateHeroRequest {
  constructor(
    public name: string,
    public race: 'HUMAN' | 'ALIEN' | 'DIVINE' | 'CYBORG',
  ) {}
}
