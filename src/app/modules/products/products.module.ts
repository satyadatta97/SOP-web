import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductViewComponent } from './product-view/product-view.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbModule
  ]
})
export class ProductsModule { }
