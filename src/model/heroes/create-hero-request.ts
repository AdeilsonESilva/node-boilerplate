export class CreateHeroRequest {
  constructor(
    public name: string,
    public race: 'HUMAN' | 'ALIEN' | 'DIVINE' | 'CYBORG',
  ) {}
}
