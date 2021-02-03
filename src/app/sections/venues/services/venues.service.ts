import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Venue } from '@core/models/venue.model';
import { environment } from '@env';
import { AuthService } from '@shared/services/auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const VENUES_COL = environment.collections.venues;
const USERS_COL = environment.collections.users;

@Injectable({
  providedIn: 'root',
})
export class VenuesService {
  constructor(protected _afs: AngularFirestore, protected _authService: AuthService) {}

  public getVenuesForUsers$(userEmail: string): Observable<Venue[]> {
    return this._afs
      .collection<Venue>(VENUES_COL, (ref) => ref.where('owner', '==', userEmail))
      .valueChanges();
  }

  public getVenuesForCurrentUser$(): Observable<Venue[]> {
    return this._authService.user$.pipe(
      switchMap((user) => {
        return this._afs
          .collection<Venue>(VENUES_COL, (ref) => ref.where('owner', '==', user.email))
          .valueChanges();
      })
    );
  }

  public saveVenueForUser(venue: Venue): Promise<Venue> {
    if (!venue) {
      return Promise.resolve(null);
    }

    if (!venue.id) {
      venue.id = this._afs.createId();
    }
    if (!venue.createdTime) {
      venue.createdTime = new Date();
    }
    const userVenue: Partial<Venue> = {
      id: venue.id,
      name: venue.name,
      zipCode: venue.zipCode,
    };

    const user = { ...this._authService.getUser() };
    user.venuesOwned = user.venuesOwned || [];

    const userVenueIndex = user.venuesOwned?.findIndex((v) => v.id === userVenue.id);

    if (userVenueIndex >= 0) {
      user.venuesOwned[userVenueIndex] = userVenue;
    } else {
      user.venuesOwned.push(userVenue);
    }

    const batch = this._afs.firestore.batch();
    const venueRef = this._afs.doc(`${VENUES_COL}/${venue.id}`).ref;
    const userRef = this._afs.doc(`${USERS_COL}/${user.email}`).ref;

    batch.set(venueRef, venue, { merge: true });
    batch.set(userRef, { venuesOwned: user.venuesOwned }, { merge: true });
    return batch
      .commit()
      .then((_) => venue)
      .catch((err) => {
        throw new Error(err);
      });
  }

  public deleteVenue(venueId: string): Promise<void> {
    if (!venueId) {
      return Promise.resolve(null);
    }

    const user = { ...this._authService.getUser() };
    const userVenueIndex = user.venuesOwned?.findIndex((v) => v.id === venueId);
    if (userVenueIndex >= 0) {
      user.venuesOwned = user.venuesOwned.filter((v) => v.id !== venueId);
    }

    const batch = this._afs.firestore.batch();
    const venueRef = this._afs.doc(`${VENUES_COL}/${venueId}`).ref;
    const userRef = this._afs.doc(`${USERS_COL}/${user.email}`).ref;

    batch.delete(venueRef);
    batch.set(userRef, user, { merge: true });
    return batch.commit().catch((err) => {
      throw new Error(err);
    });
  }
}
