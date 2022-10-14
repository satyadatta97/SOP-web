import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductGroupRoutingModule } from './product-group-routing.module';
import { ProductGroupViewComponent } from './product-group-view/product-group-view.component';
import { ProductGroupListComponent } from './product-group-list/product-group-list.component';


@NgModule({
  declarations: [
    ProductGroupViewComponent,
    ProductGroupListComponent
  ],
  imports: [
    CommonModule,
    ProductGroupRoutingModule
  ]
})
export class ProductGroupModule { }
