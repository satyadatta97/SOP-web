import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartAssistantRoutingModule } from './smart-assistant-routing.module';
import { SmartAssistantComponent } from './smart-assistant/smart-assistant.component';


@NgModule({
  declarations: [
    SmartAssistantComponent
  ],
  imports: [
    CommonModule,
    SmartAssistantRoutingModule
  ]
})
export class SmartAssistantModule { }
