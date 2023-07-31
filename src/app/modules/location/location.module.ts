import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    LocationRoutingModule,
    NgbModule
  ]
})
export class LocationModule { }
