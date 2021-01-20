import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './remixworx.routes';
import { YoutubeVideoModule } from '../../components/youtube-video/youtube-video.module';

import { RemixworxComponent } from './remixworx.component';
import { UpsidedownChandelierComponent } from './upsidedown-chandelier/upsidedown-chandelier.component';
import { CxTrailRemixworxComponent } from './cx-trail-remixworx/cx-trail-remixworx.component';



@NgModule({
  declarations: [
    RemixworxComponent,
    UpsidedownChandelierComponent,
    CxTrailRemixworxComponent
  ],
  imports: [
    SharedModule,
    YoutubeVideoModule,
    RouterModule.forChild(routes)
  ]
})
export class RemixworxModule { }
