import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';

const routes: Routes = [
  {
    path:'',
    component:PriceCalculatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceCalculatorRoutingModule { }
