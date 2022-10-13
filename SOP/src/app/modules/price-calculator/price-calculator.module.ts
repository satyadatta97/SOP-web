import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceCalculatorRoutingModule } from './price-calculator-routing.module';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';


@NgModule({
  declarations: [
    PriceCalculatorComponent
  ],
  imports: [
    CommonModule,
    PriceCalculatorRoutingModule
  ]
})
export class PriceCalculatorModule { }
