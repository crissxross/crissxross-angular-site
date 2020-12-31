import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './movingpix.routes';

import { MovingpixComponent } from './movingpix.component';



@NgModule({
  declarations: [MovingpixComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MovingpixModule { }
