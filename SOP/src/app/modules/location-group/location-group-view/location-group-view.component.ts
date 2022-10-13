import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-group-view',
  templateUrl: './location-group-view.component.html',
  styleUrls: ['./location-group-view.component.scss']
})
export class LocationGroupViewComponent implements OnInit {
locationGroup: any;

  constructor() { }

  ngOnInit(): void {
  }
  previousState():void{
    window.history.back();
  }

}
