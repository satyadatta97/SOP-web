import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationGroupListComponent } from './location-group-list/location-group-list.component';
import { LocationGroupViewComponent } from './location-group-view/location-group-view.component';

const routes: Routes = [
  {
    path:'',
    component:LocationGroupListComponent
  },
  {
    path:'location-view',
    component:LocationGroupViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationGroupRoutingModule { }
