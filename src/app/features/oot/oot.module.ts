import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './oot.routes';

import { OotComponent } from './oot.component';
import { OutoftouchComponent } from './outoftouch/outoftouch.component';



@NgModule({
  declarations: [
    OotComponent,
    OutoftouchComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OotModule { }
