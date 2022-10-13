import { Component, OnInit, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
locations: any;
  trackId!: TrackByFunction<any>;
exportToExcel() {
throw new Error('Method not implemented.');
}
selectFile($event: Event) {
throw new Error('Method not implemented.');
}
delete: any;

  constructor() { }

  ngOnInit(): void {
  }

}
