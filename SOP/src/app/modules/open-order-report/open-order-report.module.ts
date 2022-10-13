import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenOrderReportRoutingModule } from './open-order-report-routing.module';
import { OpenOrderReportComponent } from './open-order-report/open-order-report.component';


@NgModule({
  declarations: [
    OpenOrderReportComponent
  ],
  imports: [
    CommonModule,
    OpenOrderReportRoutingModule
  ]
})
export class OpenOrderReportModule { }
