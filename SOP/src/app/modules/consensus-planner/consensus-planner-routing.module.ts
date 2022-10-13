import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsensusPlannerComponent } from './consensus-planner/consensus-planner.component';

const routes: Routes = [
  {
    path:'',component:ConsensusPlannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsensusPlannerRoutingModule { }
