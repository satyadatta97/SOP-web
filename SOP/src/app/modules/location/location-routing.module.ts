import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path:'',component:LocationComponent
  },
  {
    path:'location-view',component:LocationViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
