import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:'',
    component:ProductComponent
  },
  {
    path:'view',
    component:ProductViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
