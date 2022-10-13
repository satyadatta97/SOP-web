import { Component, OnInit, TrackByFunction } from '@angular/core';

@Component({
  selector: 'app-location-group-list',
  templateUrl: './location-group-list.component.html',
  styleUrls: ['./location-group-list.component.scss']
})
export class LocationGroupListComponent implements OnInit {
locationGroups: any;
  trackId!: TrackByFunction<any>;
exportToExcel() {
throw new Error('Method not implemented.');
}
selectFile($event: Event) {
throw new Error('Method not implemented.');
}

  constructor() { }

  ngOnInit(): void {
  }

}
