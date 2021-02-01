import { Component, OnInit } from '@angular/core';
import { VenuesService } from '@sections/venues/services/venues.service';

@Component({
  selector: 'app-user-venues-manager',
  templateUrl: './user-venues-manager.component.html',
  styleUrls: ['./user-venues-manager.component.scss'],
})
export class UserVenuesManagerComponent {
  constructor(protected _venueService: VenuesService) {}
}
