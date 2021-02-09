import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@env';
import { AuthModule } from '@sections/auth/auth.module';
import { AuthService } from '@shared/services/auth.service';
import { UsersService } from '@shared/services/users.service';
import firebase from 'firebase/app';

const modules = [AngularFireAuthModule, AngularFirestoreModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules, AngularFireModule.initializeApp(environment.firebaseConfig), AuthModule],
  exports: [...modules],
  providers: [AngularFirestore, AuthService, UsersService],
})
export class CoreModule {
  constructor() {
    firebase.setLogLevel('info');
  }
}
