import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationGroupRoutingModule } from './location-group-routing.module';
import { LocationGroupListComponent } from './location-group-list/location-group-list.component';
import { LocationGroupViewComponent } from './location-group-view/location-group-view.component';
@NgModule({
  declarations: [
    LocationGroupListComponent,
    LocationGroupViewComponent
  ],
  imports: [
    CommonModule,
    LocationGroupRoutingModule,
    NgbModule
  ]
})
export class LocationGroupModule { }
