import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    ChannelRoutingModule,
    NgbModule
  ]
})
export class ChannelModule { }
