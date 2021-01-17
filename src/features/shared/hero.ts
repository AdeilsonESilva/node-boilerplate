export class Hero {
  constructor(
    public id: string,
    public name: string,
    public power_stats_id: string,
    public enabled: boolean,
    public created_at: number,
    public updated_at: number,
    public race: 'HUMAN' | 'ALIEN' | 'DIVINE' | 'CYBORG',
  ) {}
}
