import { race } from 'src/types';

export class CreateHeroRequest {
  constructor(public name: string, public race: race) {}
}
