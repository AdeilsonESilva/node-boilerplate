import { race } from 'src/types';

export class Hero {
  constructor(
    public id: string,
    public name: string,
    public enabled: boolean,
    public created_at: number,
    public updated_at: number,
    public race: race,
  ) {}
}
