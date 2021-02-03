import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Adds functionality for working with forms
import { VenuesService } from '@sections/venues/services/venues.service';
import { Venue } from '@core/models/venue.model';

@Component({
  selector: 'app-user-venues-manager',
  templateUrl: './user-venues-manager.component.html',
  styleUrls: ['./user-venues-manager.component.scss'],
})
export class UserVenuesManagerComponent {
  public venueForm: FormGroup;
  public userVenues: Venue[]

  constructor(protected _venueService: VenuesService, protected _fb: FormBuilder) {
    this.userVenues = this._venueService.getVenues()

    this.buildVenueForm();
    // Step 2: Retrieve and subscribe to the user information for authenticated user

  }

  // Builds the form using the Formgroup.group() method
  protected buildVenueForm(): void {
    this.venueForm = this._fb.group({
      name: [null, Validators.required],
      zipCode: null,
    });
  }

  public async onSubmit(): Promise<void> {
    if (this.venueForm.dirty && this.venueForm.valid) {
      await this._venueService.saveVenue({ ...this.venueForm.getRawValue(), owner: 'tzlukoma@gmail.com' });
    }
  }

}
