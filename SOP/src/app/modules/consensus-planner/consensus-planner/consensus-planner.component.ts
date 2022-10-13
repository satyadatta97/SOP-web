import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consensus-planner',
  templateUrl: './consensus-planner.component.html',
  styleUrls: ['./consensus-planner.component.scss']
})
export class ConsensusPlannerComponent implements OnInit {
  name = '!!!';
  viewMode = 'tab1';

  constructor() { }

  ngOnInit(): void {
  }

}
