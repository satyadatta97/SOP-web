import { Component, OnInit, TemplateRef, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  trackId!: TrackByFunction<any>;
products: any;
open(_t12: TemplateRef<any>) {
throw new Error('Method not implemented.');
}
selectFile($event: Event) {
throw new Error('Method not implemented.');
}
sheet: any;
get_header_row(arg0: any) {
throw new Error('Method not implemented.');
}
exportToExcel() {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
