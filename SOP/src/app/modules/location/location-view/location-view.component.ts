import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']
})
export class LocationViewComponent implements OnInit {
location: any;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  previousState():void{
    window.history.back();
  }

}
