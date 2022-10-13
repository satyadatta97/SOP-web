import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsensusPlannerRoutingModule } from './consensus-planner-routing.module';
import { ConsensusPlannerComponent } from './consensus-planner/consensus-planner.component';
import { DemandPlanComponent } from './demand-plan/demand-plan.component';
import { RevenuePlanComponent } from './revenue-plan/revenue-plan.component';
import { InventoryPlanComponent } from './inventory-plan/inventory-plan.component';
import { ResourcePlanComponent } from './resource-plan/resource-plan.component';


@NgModule({
  declarations: [
    ConsensusPlannerComponent,
    DemandPlanComponent,
    RevenuePlanComponent,
    InventoryPlanComponent,
    ResourcePlanComponent
  ],
  imports: [
    CommonModule,
    ConsensusPlannerRoutingModule
  ]
})
export class ConsensusPlannerModule { }
