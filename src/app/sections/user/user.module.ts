import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserVenuesManagerComponent } from './user-venues-manager/user-venues-manager.component';

@NgModule({
  declarations: [UserComponent, UserVenuesManagerComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
