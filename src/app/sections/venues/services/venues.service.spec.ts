import { TestBed } from '@angular/core/testing';

import { VenuesService } from './venues.service';

describe('VenuesService', () => {
  let service: VenuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
