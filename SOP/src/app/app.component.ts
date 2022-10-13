import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SOP';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
   
  ) { }

  goToProteus(): void {
 
    this.document.location.href = 'https://iplexr.com/apps';
  }
}
