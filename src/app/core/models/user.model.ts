import { Base } from './baseInterface.model';
import { Venue } from './venue.model';

export interface User extends Base {
  email: string;
  name: string;
  photoURL?: string;
  venuesOwned: Partial<Venue>[];
}
