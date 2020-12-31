import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './remixworx.routes';

import { RemixworxComponent } from './remixworx.component';



@NgModule({
  declarations: [RemixworxComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RemixworxModule { }
