import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location/location.component';
import { LocationViewComponent } from './location-view/location-view.component';


@NgModule({
  declarations: [
    LocationComponent,
    LocationViewComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
