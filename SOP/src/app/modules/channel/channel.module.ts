import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { ChannelViewComponent } from './channel-view/channel-view.component';
import { ChannelListComponent } from './channel-list/channel-list.component';


@NgModule({
  declarations: [
    ChannelViewComponent,
    ChannelListComponent
  ],
  imports: [
    CommonModule,
    ChannelRoutingModule
  ]
})
export class ChannelModule { }
