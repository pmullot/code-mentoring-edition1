import { Component, OnInit } from "@angular/core";
import { VenuesService } from "@sections/venues/services/venues.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-user-venues-manager",
  templateUrl: "./user-venues-manager.component.html",
  styleUrls: ["./user-venues-manager.component.scss"],
})
export class UserVenuesManagerComponent {
  Venues$: Observable<any>;
  constructor(protected _venueService: VenuesService) {
    this.Venues$ = this._venueService.showVenues$;
  }
}
