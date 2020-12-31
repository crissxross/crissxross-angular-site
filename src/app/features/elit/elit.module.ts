import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './elit.routes';

import { ElitComponent } from './elit.component';



@NgModule({
  declarations: [ElitComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ElitModule { }
