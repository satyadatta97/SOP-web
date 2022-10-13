import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-manager',
  templateUrl: './scenario-manager.component.html',
  styleUrls: ['./scenario-manager.component.scss']
})
export class ScenarioManagerComponent implements OnInit {
  name = '!!!';
  viewMode = 'tab1';

  constructor() { }

  ngOnInit(): void {
  }

}
