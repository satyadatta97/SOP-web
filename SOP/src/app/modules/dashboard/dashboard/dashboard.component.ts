import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  slideMenuHide: boolean = true;
  constructor() { }
  hideMenu() {
    this.slideMenuHide = !this.slideMenuHide;
  }

  ngOnInit(): void {
  }

}
