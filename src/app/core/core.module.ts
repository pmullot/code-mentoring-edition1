import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '@env';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

const modules = [AngularFireAuthModule, AngularFirestoreModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...modules, AngularFireModule.initializeApp(environment.firebaseConfig)],
  exports: [...modules],
  providers: [AngularFirestore, AuthService, UserService],
})
export class CoreModule {}
