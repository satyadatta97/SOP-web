import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryVisibilityRoutingModule } from './inventory-visibility-routing.module';
import { InventoryListComponent } from './inventory-list/inventory-list.component';


@NgModule({
  declarations: [
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    InventoryVisibilityRoutingModule
  ]
})
export class InventoryVisibilityModule { }
