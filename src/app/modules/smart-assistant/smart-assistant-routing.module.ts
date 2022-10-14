import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartAssistantComponent } from './smart-assistant/smart-assistant.component';

const routes: Routes = [
  {
    path:"",component:SmartAssistantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartAssistantRoutingModule { }
