import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { StitchedUpComponent } from './stitched-up/stitched-up.component';
import { WritingNewBodyWorldsComponent } from './writing-new-body-worlds/writing-new-body-worlds.component';

const routes: Routes = [
  {
    path: '', component: ProjectsComponent
  },
  {
    path: 'writing-new-body-worlds', component: WritingNewBodyWorldsComponent
  },
  {
    path: 'stitched-up', component: StitchedUpComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
