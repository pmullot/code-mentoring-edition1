import { Component, OnInit } from '@angular/core';
import { VenuesService } from '@sections/venues/services/venues.service';
import { Venue } from '@core/models/venue.model';

@Component({
  selector: 'app-user-venues-manager',
  templateUrl: './user-venues-manager.component.html',
  styleUrls: ['./user-venues-manager.component.scss'],
})
export class UserVenuesManagerComponent {
  public userVenues: Venue[]

  constructor(protected _venueService: VenuesService) {
    this.userVenues = this._venueService.getVenues()

  }
}
