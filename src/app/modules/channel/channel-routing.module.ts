import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelViewComponent } from './channel-view/channel-view.component';

const routes: Routes = [
  {
    path:"", component:ChannelListComponent,
  },
  {
    path:"view",component:ChannelViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule { }
