import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { routes } from './elit.routes';

import { ElitComponent } from './elit.component';
import { UnderbellyComponent } from './underbelly/underbelly.component';
import { TailspinComponent } from './tailspin/tailspin.component';
import { RememoriComponent } from './rememori/rememori.component';
import { FittingThePatternComponent } from './fitting-the-pattern/fitting-the-pattern.component';



@NgModule({
  declarations: [
    ElitComponent,
    UnderbellyComponent,
    TailspinComponent,
    RememoriComponent,
    FittingThePatternComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ElitModule { }
