import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@env';
import firebase from 'firebase/app';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

const modules = [AngularFireAuthModule, AngularFirestoreModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules, AngularFireModule.initializeApp(environment.firebaseConfig)],
  exports: [...modules],
  providers: [AngularFireAuth, AngularFirestore, UsersService, AuthService],
})
export class CoreModule {
  constructor() {
    firebase.setLogLevel('debug');
  }
}
