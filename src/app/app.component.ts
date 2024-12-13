import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SCM_WEB_APP_URL } from './app-constants';

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
  wayToApps(): void {
    this.document.location.href = 'apps';
  }
  goToApps(){
    this.document.location.href = SCM_WEB_APP_URL+'apps';
  }
  togglemenu(){
    let arrow:any = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      // arrow[i].addEventListener("click", (e:any)=>{
    //  let arrowParent = arrow[i].parentElement.parentElement;//selecting main parent of arrow
    //  arrowParent.classList.toggle("showMenu");
      // });
    }
    let sidebar:any = document.querySelector(".sidebar");
    let sidebarBtn:any = document.querySelector(".bs-menu");
    console.log(sidebarBtn);
    // sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
    // });
  }
  togglesubmenu($event:any,elementid:string){
    console.log("working",$event)
    // $event.target.parentElement.parentElement.parentElement.classList.toggle("showMenu");
    try{
      document.getElementById(elementid)?.classList.toggle("showMenu");
    }
    catch(e:any){
      
    }
  }
}
