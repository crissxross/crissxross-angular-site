import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {MatDialogModule} from '@angular/material/dialog';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './remixworx.routes';
import { YoutubeVideoModule } from '../../components/youtube-video/youtube-video.module';

import { RemixworxComponent } from './remixworx.component';
import { UpsidedownChandelierComponent } from './upsidedown-chandelier/upsidedown-chandelier.component';
import { CxTrailRemixworxComponent } from './cx-trail-remixworx/cx-trail-remixworx.component';
import { CxTrailStoryDialogComponent } from './cx-trail-story-dialog/cx-trail-story-dialog.component';



@NgModule({
  declarations: [
    RemixworxComponent,
    UpsidedownChandelierComponent,
    CxTrailRemixworxComponent,
    CxTrailStoryDialogComponent,
  ],
  imports: [
    SharedModule,
    MatDialogModule,
    YoutubeVideoModule,
    RouterModule.forChild(routes)
  ],
  // entryComponents: [CxTrailRemixworxComponent]
})
export class RemixworxModule { }
