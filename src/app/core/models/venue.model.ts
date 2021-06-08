import { Base } from './baseInterface.model';

export interface OpeningTime {
  weekDay: number;
  openAt: Date;
  closeAt: Date;
}

export interface CheckIn {
  userId: string;
  venueId: string;
  checkInDateTime: Date;
  checkOutDateTime?: Date;
  hasCheckedOut: boolean;
}

export interface Venue extends Base {
  name: string;
  owner: string;
  zipCode: string;
  Address?: string;
  workingHours: OpeningTime[];
  checkIns: {
    [dateAsYYYYMMDD: string]: CheckIn[];
  };
}
