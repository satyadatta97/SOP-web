import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScenarioManagerComponent } from './scenario-manager/scenario-manager.component';

const routes: Routes = [
  {
    path:'',
    component:ScenarioManagerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScenarioManagerRoutingModule { }
