import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Venue } from '@core/models/venue.model';
import { environment } from '@env';
import { Observable } from 'rxjs';

const VENUE_COL = environment.collections.venues

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  constructor(protected _afs: AngularFirestore) { }


  // Retrieve all the venues of a user
  public getVenuesByUser(email: string): Observable<Venue[]> {
    return this._afs
      .collection<Venue>(VENUE_COL, (ref) => ref.where('owner', '==', email))
      .valueChanges()
  }

  // Load and save a user's venue
  public saveVenue(venue: Venue): Promise<Venue> {
    if (!venue.owner) {
      throw new Error('each venue must have an owner')
    } else if (!venue.name) {
      throw new Error('each venue must have a name')
    }
    return this._afs
      .collection(VENUE_COL)
      .doc().set(venue, { merge: true })
      .then((_) => venue)
  }


}
