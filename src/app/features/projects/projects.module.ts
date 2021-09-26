import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { WritingNewBodyWorldsComponent } from './writing-new-body-worlds/writing-new-body-worlds.component';
import { StitchedUpComponent } from './stitched-up/stitched-up.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    WritingNewBodyWorldsComponent,
    StitchedUpComponent
  ],
  imports: [
    SharedModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
