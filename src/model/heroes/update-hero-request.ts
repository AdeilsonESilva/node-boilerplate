import { race } from 'src/types';

export class UpdateHeroRequest {
  constructor(public name: string, public race: race) {}
}
