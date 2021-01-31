import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserVenuesManagerComponent } from './user-venues-manager/user-venues-manager.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'venues',
    component: UserVenuesManagerComponent,
  },
  {
    path: '',
    component: UserComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
