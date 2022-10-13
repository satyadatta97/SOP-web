import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-group-view',
  templateUrl: './product-group-view.component.html',
  styleUrls: ['./product-group-view.component.scss']
})
export class ProductGroupViewComponent implements OnInit {
productGroup: any;

  constructor() { }

  ngOnInit(): void {
  }
  previousState():void{
    window.history.back();
  }

}
