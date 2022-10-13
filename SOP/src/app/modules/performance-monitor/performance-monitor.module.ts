import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceMonitorRoutingModule } from './performance-monitor-routing.module';
import { PerformanceMonitorComponent } from './performance-monitor/performance-monitor.component';


@NgModule({
  declarations: [
    PerformanceMonitorComponent
  ],
  imports: [
    CommonModule,
    PerformanceMonitorRoutingModule
  ]
})
export class PerformanceMonitorModule { }
