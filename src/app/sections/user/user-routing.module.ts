import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewVenueComponent } from '@sections/add-new-venue/add-new-venue.component';
import { SearchForOrAddAVenueComponent } from '@sections/search-for-or-add-a-venue/search-for-or-add-a-venue.component';
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
    path: 'searchForOrAddAVenue',
    component: SearchForOrAddAVenueComponent
  },
  {
    path: 'addNewVenue',
    component: AddNewVenueComponent,
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
