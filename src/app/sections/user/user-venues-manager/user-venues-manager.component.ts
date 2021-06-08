import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Venue } from '@core/models/venue.model';
import { VenuesService } from '@sections/venues/services/venues.service';
import { AuthService } from '@shared/services/auth.service';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-venues-manager',
  templateUrl: './user-venues-manager.component.html',
  styleUrls: ['./user-venues-manager.component.scss'],
})
export class UserVenuesManagerComponent {
  public userVenues$: Observable<Venue[]>;
  public venueForm: FormGroup;

  constructor(protected _venueService: VenuesService, protected _authService: AuthService, protected _fb: FormBuilder) {
    this.userVenues$ = this._authService.user$.pipe(
      filter((user) => !!user),
      switchMap((user) => this._venueService.getVenuesForUsers$(user.email))
    );
  }

  public addNewVenue(): void {
    const venue: Venue = {
      id: null,
      name: null,
      owner: this._authService.getUser().email,
      zipCode: null,
      checkIns: {},
      workingHours: [],
      createdTime: new Date(),
    };
    return this.createVenueForm(venue);
  }

  public createVenueForm(venue: Venue): void {
    if (this.venueForm) {
      this.venueForm.reset();
    } else {
      this.venueForm = this._fb.group({
        id: [venue.id],
        name: [venue.name, Validators.required],
        owner: [venue.owner, Validators.required],
        zipCode: [venue.zipCode, Validators.required],
      });
    }
    this.venueForm.patchValue(venue);
  }

  public saveVenue(): void {
    this._venueService.saveVenueForUser(this.venueForm.getRawValue()).then(this.createVenueForm.bind(this));
  }

  public deleteVenue(venue: Venue): Promise<void> {
    return this._venueService.deleteVenue(venue.id);
  }
}
