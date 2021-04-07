import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '@core/models/user.model';
import firebase from 'firebase/app';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { createUserFromFirebaseUser, UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user$: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(
    protected _afAuth: AngularFireAuth,
    protected _afs: AngularFirestore,
    protected _usersService: UsersService,
    protected _router: Router
  ) {
    this._afAuth.authState
      .pipe(
        switchMap((FBUser: firebase.User) => {
          if (FBUser) {
            return this._usersService.getUserByEmail$(FBUser.email).pipe(
              tap((DBUser: User) => {
                if (!DBUser) {
                  const user = createUserFromFirebaseUser(FBUser);
                  this.user$.next(user);
                  this._router.navigate(['user']);
                } else {
                  this.user$.next(DBUser);
                  this._router.navigate([this._router.url || 'home']);
                }
              })
            );
          } else {
            return of(null);
          }
        })
      )
      .subscribe((user: User) => {
        this.user$.next(user);
      });
  }

  getUser(): User {
    return this.user$.getValue();
  }

  async loginUser(): Promise<boolean> {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return (
      this._afAuth
        .signInWithRedirect(googleProvider)
        .then((_) => {
          return this._afAuth.getRedirectResult();
        })
        // .then(this._afAuth.getRedirectResult)
        .then((userCredentials) => {
          console.log('userCredentials', userCredentials);
          return true;
        })
        .catch((error) => {
          alert(error);
          return null;
        })
    );
  }

  public logout(): Promise<void> {
    return this._afAuth.signOut();
  }
}
