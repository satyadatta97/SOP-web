import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenarioManagerRoutingModule } from './scenario-manager-routing.module';
import { ScenarioManagerComponent } from './scenario-manager/scenario-manager.component';


@NgModule({
  declarations: [
    ScenarioManagerComponent
  ],
  imports: [
    CommonModule,
    ScenarioManagerRoutingModule
  ]
})
export class ScenarioManagerModule { }
