import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenOrderReportComponent } from './open-order-report/open-order-report.component';

const routes: Routes = [
  {
    path:'',component:OpenOrderReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenOrderReportRoutingModule { }
