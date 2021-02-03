import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './../../../core/models/user.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '@shared/services/auth.service'
import { Venue } from '@core/models/venue.model';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { environment } from '@env';
import { Observable } from 'rxjs';

const VENUE_COL = environment.collections.venues

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  public venues$: BehaviorSubject<Venue[]> = new BehaviorSubject(null);
  // Declare local variable to hold the user
  public currentUser: User
  constructor(protected _afAuth: AngularFireAuth, protected _afs: AngularFirestore, protected _authService: AuthService) {
    // Use the auth service to get the user from the behavior subject and save that into the local variable
    //TODO
    // When I console log the value below, it is null
    console.log(`currentUser`, this.currentUser)

    // The goal is to use the value of the currentUser.email instead of the hardcoded email below
    this._afs
      .collection<Venue>(VENUE_COL, (ref) => ref.where('owner', '==', 'tzlukoma@gmail.com'))
      .valueChanges().subscribe((venues: Venue[]) => {
        this.venues$.next(venues)
      })
  }


  // Retrieve all the venues of a user
  public getVenuesByUser(email: string): Observable<Venue[]> {
    return null
  }

  // Load and save a user's venue
  public saveVenue(venue: Venue): Promise<Venue> {
    if (!venue.owner) {
      throw new Error('each venue must have an owner')
    } else if (!venue.name) {
      throw new Error('each venue must have a name')
    }

    console.log(venue)
    return this._afs
      .collection(VENUE_COL)
      .doc().set(venue, { merge: true })
      .then((_) => venue)
  }

  async setUser() {
    this.currentUser = await this._authService.getUser()
  }


  getVenues(): Venue[] {
    // TODO: Figure out how to abstract getVenues instead of calling venues$
    // directly from the user-venues-manager.component.ts
    return this.venues$.getValue()
  }


}
