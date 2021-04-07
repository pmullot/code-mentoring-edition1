import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewVenueComponent } from './add-new-venue.component';

describe('AddNewVenueComponent', () => {
  let component: AddNewVenueComponent;
  let fixture: ComponentFixture<AddNewVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewVenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
