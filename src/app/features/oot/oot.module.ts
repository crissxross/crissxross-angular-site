import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './oot.routes';
import { YoutubeVideoModule } from '../../components/youtube-video/youtube-video.module';

import { OotComponent } from './oot.component';
import { OutoftouchComponent } from './outoftouch/outoftouch.component';



@NgModule({
  declarations: [
    OotComponent,
    OutoftouchComponent
  ],
  imports: [
    SharedModule,
    YoutubeVideoModule,
    RouterModule.forChild(routes)
  ]
})
export class OotModule { }
