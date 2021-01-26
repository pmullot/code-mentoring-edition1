import { Base } from './baseInterface.model';
import { Venue } from './venue.model';

export interface User extends Base {
  email: string;
  name: string;
  photoURL?: string;
  venuesOwned: Partial<Venue>[];
  // Additional fields for the User model to accomodate extension of the profile
  address?: string;
  zipCode?: string;
  city?: string;
  country?: string;
}

