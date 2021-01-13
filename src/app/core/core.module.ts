import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@env';
import firebase from 'firebase/app';

const modules = [AngularFireAuthModule, AngularFirestoreModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules, AngularFireModule.initializeApp(environment.firebaseConfig)],
  exports: [...modules],
  providers: [AngularFirestore],
})
export class CoreModule {
  constructor() {
    firebase.setLogLevel('info');
  }
}
