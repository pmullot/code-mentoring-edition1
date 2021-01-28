import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { VenuesService } from '@sections/venues/services/venues.service';
import { VenuesModule } from '@sections/venues/venues.module';

const modules = [ReactiveFormsModule, VenuesModule];
const declarations: [] = [];
const providers = [AngularFireAuth, AngularFirestore, VenuesService];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ...modules],
  exports: [...modules, ...declarations],
  entryComponents: [],
  providers: providers,
})
export class SharedModule {}
