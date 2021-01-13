import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CoreModule } from '@core/core.module';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

const modules = [CoreModule];
const declarations: [] = [];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...declarations],
  entryComponents: [],
  providers: [AngularFireAuth, AngularFirestore, UsersService, AuthService],
})
export class SharedModule {}
