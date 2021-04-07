import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForOrAddAVenueComponent } from './search-for-or-add-a-venue.component';

describe('SearchForOrAddAVenueComponent', () => {
  let component: SearchForOrAddAVenueComponent;
  let fixture: ComponentFixture<SearchForOrAddAVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchForOrAddAVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForOrAddAVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
