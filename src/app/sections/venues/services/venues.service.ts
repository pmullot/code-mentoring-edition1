import { Injectable } from "@angular/core";
import { User } from "@core/models/user.model";
import { AuthService } from "@shared/services/auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class VenuesService {
  showVenues$: Observable<any>;
  constructor(protected _authService: AuthService) {
    this.showVenues$ = this._authService.getUser().venuesOwned;
  }
}
