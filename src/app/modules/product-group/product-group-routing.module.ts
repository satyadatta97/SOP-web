import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGroupListComponent } from './product-group-list/product-group-list.component';
import { ProductGroupViewComponent } from './product-group-view/product-group-view.component';

const routes: Routes = [
  {
    path:'',component:ProductGroupListComponent
  },
  {
    path:'product-view',
    component:ProductGroupViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductGroupRoutingModule { }
