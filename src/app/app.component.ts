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
  goToProteusRole(): void {
 
    this.document.location.href = 'https://iplexr.com/role-management';
  }
  goToProteusProfile(): void {
 
    this.document.location.href = 'https://iplexr.com/profile';
  }
  goToProteusMenu(): void {
 
    this.document.location.href = 'https://iplexr.com/menu-management';
  }
  goToProteusUser(): void {
 
    this.document.location.href = 'https://iplexr.com/user-management';
  }
  goToProteusScheduler(): void {
 
    this.document.location.href = 'https://iplexr.com/scheduler';
  }
  goToProteusPublishForecast(): void {
 
    this.document.location.href = 'https://iplexr.com/publish-forecast';
  }
  goToProteusConfigure(): void {
 
    this.document.location.href = 'https://iplexr.com/configuration-settings';
  }
  logout(): void {
 
    this.document.location.href = 'https://iplexr.com/login';
  }

}
