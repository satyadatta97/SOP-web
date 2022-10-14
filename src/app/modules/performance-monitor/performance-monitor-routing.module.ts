import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceMonitorComponent } from './performance-monitor/performance-monitor.component';

const routes: Routes = [
  {
    path:'',component:PerformanceMonitorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceMonitorRoutingModule { }
