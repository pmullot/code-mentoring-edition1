import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '@core/models/user.model';
import { environment } from '@env';
import { Observable } from 'rxjs';

const USER_COL = environment.collections.users;

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(protected _afs: AngularFirestore) {}

  public getUserByEmail$(email: string): Observable<User> {
    return this._afs.collection<User>(USER_COL).doc(email).valueChanges();
    // return this._afs.doc<User>(`${USER_COLLECTION}/${email}`).valueChanges(); <-- This is the same as above
  }

  public saveUser(user: User): Promise<User> {
    if (!user.email) {
      throw new Error('email needed to save a user');
    }
    return this._afs
      .collection(USER_COL)
      .doc(user.email)
      .set(user, { merge: true })
      .then((_) => user);
  }

  public getUsersByName$(name: string): Observable<User[]> {
    return this._afs
      .collection<User>(USER_COL, (ref) => ref.where('name', '==', name))
      .valueChanges();
  }
}
