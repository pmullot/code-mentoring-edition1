import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVenuesManagerComponent } from './user-venues-manager.component';

describe('UserVenuesManagerComponent', () => {
  let component: UserVenuesManagerComponent;
  let fixture: ComponentFixture<UserVenuesManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVenuesManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVenuesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
