import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesRoutingModule } from './categories-routing.module';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    NgbModule 
  ]
})
export class CategoriesModule { }
